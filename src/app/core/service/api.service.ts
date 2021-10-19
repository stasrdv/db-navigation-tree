import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { DEFAULT_DELAY } from "src/app/navigator-tree/constans/navigation-tree.constants";
import { NavItem } from "src/app/navigator-tree/models/nodeItem";
import { flatData } from "src/mocks/navItems";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor() {}

  getItemByParentId(id: string | number): Observable<NavItem[]> {
    const childNodes = flatData.filter((item) => item.parent === id);
    // Simulate calling API on demand, get data by samll chunks
    const customDelay = childNodes.length * DEFAULT_DELAY;
    return of<NavItem[]>(childNodes).pipe(delay(customDelay));
  }
}
