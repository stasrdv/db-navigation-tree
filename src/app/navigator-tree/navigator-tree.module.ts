import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationTreeComponent } from "./components/navigation-tree/navigation-tree.component";
import { EntityToIconPipe } from "./pipes/entity-to-icon.pipe";
import { FilterByIdPipe } from "./pipes/filter-by-id.pipe";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [NavigationTreeComponent, EntityToIconPipe, FilterByIdPipe],
  imports: [CommonModule, SharedModule],
  exports: [NavigationTreeComponent, EntityToIconPipe, FilterByIdPipe],
})
export class NavigatorTreeModule {}
