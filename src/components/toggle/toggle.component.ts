import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.scss"]
})
export class ToggleComponent {
  @Output() toggleStatus: EventEmitter<boolean> = new EventEmitter(false);
  private status: boolean = false;

  toggle() {
    this.status = !this.status;
    this.toggleStatus.emit(this.status);
  }
}
