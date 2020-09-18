import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ScrollbarComponent } from "./scrollbar/scrollbar.component";

@NgModule({
  declarations: [ScrollbarComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ScrollbarComponent],
})
export class componentsModule {}
