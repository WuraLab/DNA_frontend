import { SearchButtonComponent } from "./search-button/search-button.component";
import { RecordCardComponent } from "./record-card/record-card.component";
import { BackButtonComponent } from "./back-button/back-button.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ScrollbarComponent } from "./scrollbar/scrollbar.component";

@NgModule({
  declarations: [ScrollbarComponent, RecordCardComponent, BackButtonComponent, SearchButtonComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ScrollbarComponent, BackButtonComponent, RecordCardComponent, SearchButtonComponent],
})
export class componentsModule {}
