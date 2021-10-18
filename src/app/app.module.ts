import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { NavigatorTreeModule } from "./navigator-tree/navigator-tree.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, CoreModule, NavigatorTreeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
