import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchComponent } from "./search.page";

const routes: Routes = [
  {
    path: "",
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
