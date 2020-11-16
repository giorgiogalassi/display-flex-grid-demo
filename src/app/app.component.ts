import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public showGrid: boolean = false;

  showDisplayType(status: boolean) {
    this.showGrid = status;
  }
}
