import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Subject, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DataService } from "src/app/navigator-tree/services/data.service";
import { DbEntity } from "../../enums/navigation-tree.enum";
import { NavItem } from "../../models/nodeItem";

@Component({
  selector: "navigation-tree",
  templateUrl: "./navigation-tree.component.html",
  styleUrls: ["./navigation-tree.component.scss"],
})
export class NavigationTreeComponent implements OnInit, OnDestroy {
  loading = false;
  navItems: NavItem[] = [];
  openNodes = new Set();
  private cleanupSubject$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loading = true;
    this.loadItems().subscribe((navItems) => {
      this.navItems = navItems;
      this.loading = false;
    });
  }

  onToggle(item: NavItem): void {
    if (item.entityType === DbEntity.Column) return;
    if (this.openNodes.has(item.id)) {
      this.openNodes.delete(item.id);
    } else {
      this.updateList(item.id);
      this.openNodes.add(item.id);
    }
  }

  private updateList(id: number): void {
    if (this.navItems.some((element) => element.parent === id)) {
      return;
    }
    this.loadItems(id).subscribe((items) => {
      this.navItems = [...this.navItems, ...items];
      this.loading = false;
    });
  }

  private loadItems(id: number = 0): Observable<NavItem[]> {
    this.loading = true;
    return this.dataService
      .getItemByParentId(id)
      .pipe(takeUntil(this.cleanupSubject$));
  }

  trackByFn(index, item): number {
    return item.id;
  }

  ngOnDestroy(): void {
    this.cleanupSubject$.next();
    this.cleanupSubject$.unsubscribe();
  }
}
