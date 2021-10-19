import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRole } from "../enums/roles.enum";

@Injectable({
  providedIn: "root",
})
export class PermissionService {
  constructor() {}

  // Simulate simple API CALL to get user role
  getUserPermissions(userId: number) {
    return UserRole.Admin;
  }
}
