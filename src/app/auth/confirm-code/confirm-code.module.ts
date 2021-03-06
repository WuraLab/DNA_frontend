import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ConfirmCodePageRoutingModule } from "./confirm-code-routing.module";

import { confirmCodeComponent } from "./confirm-code.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmCodePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [confirmCodeComponent]
})
export class ConfirmCodePageModule {}
