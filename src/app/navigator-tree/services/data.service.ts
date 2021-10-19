import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ApiService } from "src/app/core/service/api.service";
import { NavItem } from "../models/nodeItem";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private apiService: ApiService) {}

  getItemByParentId(id: string | number): Observable<NavItem[]> {
    return this.apiService.getItemByParentId(id);
  }
}
