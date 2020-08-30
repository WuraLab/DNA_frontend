import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ForgotPasswordPageRoutingModule } from "./forgot-password-routing.module";

import { ForgotPasswordComponent } from "./forgot-password.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordPageModule {}
