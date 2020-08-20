import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { confirmCodeComponent } from "./confirm-code.page";

const routes: Routes = [
  {
    path: "",
    component: confirmCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmCodePageRoutingModule {}
