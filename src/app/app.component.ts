import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NavItem } from "./navigator-tree/models/nodeItem";
import { DataService } from "./navigator-tree/services/data.service";
import { map, tap, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor() {}
}
