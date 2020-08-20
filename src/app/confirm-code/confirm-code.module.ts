import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ConfirmCodePageRoutingModule } from "./confirm-code-routing.module";

import { confirmCodeComponent } from "./confirm-code.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmCodePageRoutingModule
  ],
  declarations: [confirmCodeComponent]
})
export class ConfirmCodePageModule {}
