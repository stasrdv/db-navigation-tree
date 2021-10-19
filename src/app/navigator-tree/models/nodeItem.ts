import { UserRole } from "src/app/core/enums/roles.enum";
import { DbEntity } from "../enums/navigation-tree.enum";

export interface NavItem {
  title: string;
  id: number;
  parent?: string | number;
  entityType?: DbEntity;
  permission?: UserRole;
}
