import { UserRole } from "./../../../core/enums/roles.enum";
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { PermissionService } from "src/app/core/service/permission.service";
import { DataService } from "src/app/navigator-tree/services/data.service";
import { DbEntity } from "../../enums/navigation-tree.enum";
import { NavItem } from "../../models/nodeItem";

@Component({
  selector: "navigation-tree",
  templateUrl: "./navigation-tree.component.html",
  styleUrls: ["./navigation-tree.component.scss"],
  host: { class: "navigation-tree" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationTreeComponent implements OnInit, OnDestroy {
  loading = false;
  activeUserRole: UserRole;
  itemsSubject: BehaviorSubject<NavItem[]> = new BehaviorSubject<NavItem[]>([]);
  navItems: Observable<NavItem[]> = this.itemsSubject.asObservable();
  openNodes = new Set();
  private cleanupSubject$ = new Subject<void>();

  constructor(
    private dataService: DataService,
    private permissionService: PermissionService
  ) {}

  ngOnInit() {
    this.updateList(0);
    this.activeUserRole = this.permissionService.getUserPermissions(0);
  }

  onToggle(item: NavItem): void {
    if (!this.isValidPermission(item)) return;
    if (item.entityType === DbEntity.Column) return;
    this.onValidToggle(item);
  }

  private onValidToggle(item: NavItem): void {
    if (this.openNodes.has(item.id)) {
      this.openNodes.delete(item.id);
    } else {
      this.openNodes.add(item.id);
      this.updateList(item.id);
    }
  }

  private isValidPermission(item: NavItem): boolean {
    return item.permission === this.activeUserRole;
  }

  private updateList(id: number): void {
    if (this.itemsSubject.value.some((element) => element.parent === id)) {
      return;
    }
    this.loading = true;
    this.loadNewItems(id)
      .pipe(takeUntil(this.cleanupSubject$))
      .subscribe((items) => {
        const newData = [...this.itemsSubject.value, ...items];
        this.itemsSubject.next(newData);
        this.loading = false;
      });
  }

  private loadNewItems(id: number = 0): Observable<NavItem[]> {
    this.loading = true;
    return this.dataService
      .getItemByParentId(id)
      .pipe(takeUntil(this.cleanupSubject$));
  }

  ngOnDestroy(): void {
    this.cleanupSubject$.next();
    this.cleanupSubject$.unsubscribe();
  }
}
