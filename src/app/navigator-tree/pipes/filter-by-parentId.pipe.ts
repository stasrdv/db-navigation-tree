import { Pipe, PipeTransform } from "@angular/core";
import { NavItem } from "../models/nodeItem";

@Pipe({
  name: "filterByParentId",
})
export class FilterByIdPipe implements PipeTransform {
  transform(list: NavItem[], parentId): NavItem[] {
    return list.filter((item) => {
      return item.parent === parentId;
    });
  }
}
