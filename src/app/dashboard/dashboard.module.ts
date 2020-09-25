import { componentsModule } from "./../components/components.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardPageRoutingModule } from "./dashboard-routing.module";

import { DashboardComponent } from "./dashboard.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    componentsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardPageModule {}
