import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecordDetailComponent } from "./record-detail.page";

const routes: Routes = [
  {
    path: "",
    component: RecordDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordDetailComponentRoutingModule {}
