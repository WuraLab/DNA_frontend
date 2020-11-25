import { componentsModule } from "./../components/components.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecordsComponentRoutingModule } from "./records-routing.module";

import { RecordsComponent } from "./records.page";
import { SortPipe } from "../pipes/sort.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordsComponentRoutingModule,
    componentsModule,
  ],
  declarations: [RecordsComponent, SortPipe]
})
export class RecordsComponentModule {}
