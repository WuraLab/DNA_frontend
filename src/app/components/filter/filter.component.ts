import { BackButtonComponent } from "./../back-button/back-button.component";
import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { ScrollbarComponent } from '../scrollbar/scrollbar.component';

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {

  toggleFilter: boolean;

  constructor( public popoverController: PopoverController) { 
    this.toggleFilter = false;
  }

  ngOnInit() {}

  onToggleFilter() {
    this.toggleFilter = !this.toggleFilter; 
  }

}
