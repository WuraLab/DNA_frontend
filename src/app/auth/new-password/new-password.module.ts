import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NewPasswordComponentRoutingModule } from "./new-password-routing.module";

import { NewPasswordComponent } from "./new-password.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPasswordComponentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewPasswordComponent]
})
export class NewPasswordPageModule {}
