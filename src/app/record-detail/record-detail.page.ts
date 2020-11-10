import { DateServiceService } from "./../services/date-service.service";
import { add, format, sub } from "date-fns";
import { FormBuilder, FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { RecordService } from "../services/record.service";

@Component({
  selector: "app-record-detail",
  templateUrl: "./record-detail.page.html",
  styleUrls: ["./record-detail.page.scss"],
})
export class RecordDetailComponent implements OnInit {
  @Input() record: any;
  @ViewChild("createDatePicker") createDatePicker;

  editingName: boolean;
  editingAmount: boolean;
  editingRate: boolean;
  editingDescription: boolean;
  EditingCreateDate: boolean;
  EditingDueDate: boolean;

  name
  amount
  rate
  description
  createDate
  dueDate

  time: string;
  maxDate: string;
  minDate: string;
  
    constructor(
    public navParams: NavParams,
    public ds: DateServiceService,
    public modalCtrl: ModalController,
    private recordService: RecordService
  ) { 
    this.editingName = false
    this.editingAmount = false
    this.editingRate = false
    this.EditingCreateDate = false
    this.EditingDueDate = false

    this.time = format(Date.now(), this.ds.rangeformat);

      // set minimun date to 20 years to today's date and also return formatted string
      this.minDate = format(
        sub(new Date(this.time), {
          years: 20,
        }),
        this.ds.rangeformat
      );
  
      // add 20 years to today's date and also return formatted string
      this.maxDate = format(
        new Date(this.time),
        this.ds.rangeformat
      );
   }

  ngOnInit() {
    this.name = new FormControl(this.record.name);  
    this.amount = new FormControl(this.record.amount);  
    this.rate = new FormControl(this.record.interest_rate);  
    this.description = new FormControl(this.record.description);  
    this.createDate = new FormControl(this.record.created);  
    this.dueDate = new FormControl(this.record.due_date);  
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  editing(prop) {
    switch (prop) {
      case "name":
        this.editingName = true
        break;

      case "amount":
        this.editingAmount = true
        break;

      case "rate":
        this.editingRate = true
        break;

      case "description":
        this.editingDescription = true
        break;

      case "createDate":
        // this.createDatePicker.open();
        this.EditingCreateDate = true
        break; 
      
      case "dueDate":
      // this.createDatePicker.open();
      this.EditingDueDate = true
      break;  
    
      default:
        break;
    }
  }

  cancelChange(prop) {
    switch (prop) {
      case "name":
        this.name.value =  this.record.name;
        this.editingName = false
        break;

      case "amount":
        this.amount.value =  this.record.amount;
        this.editingAmount = false
        break;

      case "rate":
        this.rate.value =  this.record.interest_rate;
        this.editingRate = false
        break;

      case "description":
        this.description.value =  this.record.description;
        this.editingDescription = false
        break;

      case "createDate":
        this.createDate.value =  this.record.fCreateDate;
        this.EditingCreateDate = false
        break;

      case "dueDate":
        this.dueDate.value =  this.record.due_date;
        this.EditingDueDate = false
        break;

      default:
        break;
    }
  }

deleteRecord(){
    // this.recordService.delete(record.id)
    //     .subscribe(res => {
    //       this.todos.splice(index, 1);
    //     });
  }

  upadateRecord(prop) {
    switch (prop) {
      case "name":
        if (this.record.name != this.name.value) {
          this.record.name = this.name.value;
          this.recordService.update(this.record);
        }
       
        this.editingName = false
       
      break

      case "amount":
        if (this.record.amount != this.amount.value) {
          this.record.amount = this.amount.value;
          this.recordService.update(this.record);
        }

        this.editingAmount = false

        break;
      
      case "description":
       if (this.record.description != this.description.value){
        this.record.description = this.description.value;
        this.recordService.update(this.record);
       }
        this.editingDescription = false
        
        break;

      case "rate":
       if (this.record.interest_rate != this.rate.value){
        this.record.interest_rate = this.rate.value;
        this.recordService.update(this.record);
       }
        this.editingRate = false
        
        break;

      case "createDate":
        this.record.created = this.createDate.value;
        this.record.fCreateDate = this.ds.formatDateToDay(this.createDate.value);
        this.recordService.update(this.record);
        this.EditingCreateDate = false
        
        break;

      case "dueDate":
        this.record.due_date = this.dueDate.value;
        this.record.fDueDate = this.ds.formatDateToDay(this.dueDate.value);
        this.recordService.update(this.record);
        this.EditingDueDate = false
        
      break;


      default:
        break;
  }
  }
}
