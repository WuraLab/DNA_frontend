import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { RecordService } from "../services/record.service";

@Component({
  selector: "app-record-detail",
  templateUrl: "./record-detail.page.html",
  styleUrls: ["./record-detail.page.scss"],
})
export class RecordDetailComponent implements OnInit {

  @Input() record: any;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private recordService: RecordService
  ) {  }

  ngOnInit() {
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  deleteRecord(){
    // this.recordService.delete(record.id)
    //     .subscribe(res => {
    //       this.todos.splice(index, 1);
    //     });
  }

  upadateRecord(record: any) {
    updatedDescription;
    this.recordService.update(this.record);
  }
}
