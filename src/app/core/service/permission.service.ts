import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRole } from "../enums/roles.enum";

@Injectable({
  providedIn: "root",
})
export class PermissionService {
  constructor() {}

  // Simulate API CALL
  getUserPermissions(userId: number) {
    return UserRole.Admin;
  }
}
