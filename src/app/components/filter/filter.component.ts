import { FormGroup } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { BackButtonComponent } from "./../back-button/back-button.component";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;
  toggleFilter: boolean;
  isAsc: boolean;
  // : boolean


  @Output() selectedSort: EventEmitter<any> = new EventEmitter();
  @Output() selectedType: EventEmitter<any> = new EventEmitter();
  @Output() orderType: EventEmitter <boolean> = new EventEmitter();
  constructor( public popoverController: PopoverController, private fb: FormBuilder) { 
    this.toggleFilter = false;
    this.isAsc = true
  }
  
  ngOnInit() {
    // this.selectedSort.emit("name was Emitted");
    this.filterForm = this.fb.group({
      type: [""],
      sort: [""],
    });

    this.orderType.emit(this.isAsc);
  }

  toggleOrder() {
    this.isAsc = !this.isAsc;
    this.orderType.emit(this.isAsc);
  }

  typeChanged() {
    this.selectedType.emit(this.filterForm.value.type);
  }

  sortChanged() {
    this.selectedSort.emit(this.filterForm.value.sort);
  }

  onToggleFilter() {
    this.toggleFilter = !this.toggleFilter; 
  }

}
