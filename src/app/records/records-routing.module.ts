import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecordsComponent } from "./records.page";

const routes: Routes = [
  {
    path: "",
    component: RecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsComponentRoutingModule {}
