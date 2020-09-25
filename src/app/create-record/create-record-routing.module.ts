import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateRecordComponent } from "./create-record.page";

const routes: Routes = [
  {
    path: "",
    component: CreateRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRecordComponentRoutingModule {}
