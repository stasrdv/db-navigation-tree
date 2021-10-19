import { NavItem } from "src/app/navigator-tree/models/nodeItem";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "hasOpenNodes",
})
export class HasOpenNodesPipe implements PipeTransform {
  transform({ openNodes }: any, item: NavItem): boolean {
    return openNodes.has(item.id);
  }
}
