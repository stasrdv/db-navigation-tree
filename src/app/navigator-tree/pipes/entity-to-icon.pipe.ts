import { Pipe, PipeTransform } from "@angular/core";
import { DbEntity } from "../enums/navigation-tree.enum";

@Pipe({
  name: "entityToIcon",
})
export class EntityToIconPipe implements PipeTransform {
  transform(entityType: DbEntity): string {
    switch (entityType) {
      case DbEntity.Connection: {
        return "laptop_mac";
      }
      case DbEntity.DataBase: {
        return "storage";
      }
      case DbEntity.Schema: {
        return "schema";
      }
      case DbEntity.Table: {
        return "table_chart";
      }
      case DbEntity.Column: {
        return "view_column";
      }
    }
  }
}
