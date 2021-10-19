import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { NavItem } from "../models/nodeItem";
import { flatData } from "../../../mocks/navItems";
import { delay } from "rxjs/operators";
import { DEFAULT_DELAY } from "../constans/navigation-tree.constants";

@Injectable({
  providedIn: "root",
})
export class DataService {
  getFlatData(): Observable<NavItem[]> {
    return of<NavItem[]>(flatData);
  }

  getItemByParentId(id: string | number): Observable<NavItem[]> {
    const childNodes = flatData.filter((item) => {
      return item.parent === id;
    });

    // Simulate calling API on demand, get data by samll chunks
    const customDelay = childNodes.length * DEFAULT_DELAY;
    return of<NavItem[]>(childNodes).pipe(delay(customDelay));
  }
}
