import { componentsModule } from "./../components/components.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchPageRoutingModule } from "./search-routing.module";

import { SearchComponent } from "./search.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    componentsModule
  ],
  declarations: [SearchComponent]
})
export class SearchComponentModule {}
