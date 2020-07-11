import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FolderComponent } from "./folder.page";

const routes: Routes = [
  {
    path: "",
    component: FolderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
