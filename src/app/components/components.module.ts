import { CloseBtnComponent } from "./close-btn/close-btn.component";
import { FilterComponent } from "./filter/filter.component";
import { SearchButtonComponent } from "./search-button/search-button.component";
import { RecordCardComponent } from "./record-card/record-card.component";
import { BackButtonComponent } from "./back-button/back-button.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ScrollbarComponent } from "./scrollbar/scrollbar.component";

@NgModule({
  declarations: [ScrollbarComponent, RecordCardComponent, BackButtonComponent, SearchButtonComponent, FilterComponent, CloseBtnComponent ],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  exports: [ScrollbarComponent, BackButtonComponent, RecordCardComponent, SearchButtonComponent, FilterComponent, CloseBtnComponent],
})
export class componentsModule {}
