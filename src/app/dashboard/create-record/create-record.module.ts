import { componentsModule } from "./../../components/components.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreateRecordPageRoutingModule } from "./create-record-routing.module";

import { CreateRecordPage } from "./create-record.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRecordPageRoutingModule,
    ReactiveFormsModule,
    componentsModule,
  ],
  declarations: [CreateRecordPage],
})
export class CreateRecordPageModule {}
