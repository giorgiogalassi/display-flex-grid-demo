import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { FlexComponent } from "../components/flex/flex.component";
import { GridComponent } from "../components/grid/grid.component";
import { ToggleComponent } from "../components/toggle/toggle.component";
import { BadgeComponent } from "../components/badge/badge.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    FlexComponent,
    GridComponent,
    ToggleComponent,
    BadgeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
