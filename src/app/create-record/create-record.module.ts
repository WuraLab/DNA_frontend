import { componentsModule } from "../components/components.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreateRecordComponentRoutingModule } from "./create-record-routing.module";

import { CreateRecordComponent } from "./create-record.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRecordComponentRoutingModule,
    ReactiveFormsModule,
    componentsModule,
  ],
  declarations: [CreateRecordComponent],
})
export class CreateRecordComponentModule {}
