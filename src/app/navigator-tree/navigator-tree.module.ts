import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationTreeComponent } from "./components/navigation-tree/navigation-tree.component";
import { EntityToIconPipe } from "./pipes/entity-to-icon.pipe";
import { FilterByIdPipe } from "./pipes/filter-by-parentId.pipe";
import { SharedModule } from "../shared/shared.module";
import { HasOpenNodesPipe } from './pipes/has-open-nodes.pipe';

@NgModule({
  declarations: [NavigationTreeComponent, EntityToIconPipe, FilterByIdPipe, HasOpenNodesPipe],
  imports: [CommonModule, SharedModule],
  exports: [NavigationTreeComponent, EntityToIconPipe, FilterByIdPipe],
})
export class NavigatorTreeModule {}
