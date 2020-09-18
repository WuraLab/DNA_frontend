import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.page";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "create",
    loadChildren: () => import("./create-record/create-record.module").then( m => m.CreateRecordPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
