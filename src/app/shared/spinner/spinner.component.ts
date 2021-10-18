import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
  host: { class: "app-spinner" },
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
