import { BackButtonComponent } from "./../back-button/back-button.component";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {

  toggleFilter: boolean;

  @Output() selectedSort: EventEmitter<any> = new EventEmitter();

  constructor( public popoverController: PopoverController) { 
    this.toggleFilter = false;
  }
  
  ngOnInit() {
    // this.selectedSort.emit("name was Emitted");
  }

  onToggleFilter() {
    this.toggleFilter = !this.toggleFilter; 
  }

}
