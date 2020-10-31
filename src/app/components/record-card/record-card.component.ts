import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { RecordDetailComponent } from "src/app/record-detail/record-detail.page";

@Component({
  selector: "app-record-card",
  templateUrl: "./record-card.component.html",
  styleUrls: ["./record-card.component.scss"],
})
export class RecordCardComponent implements OnInit {
  @Input() record: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentDetail() {
    const modal = await this.modalController.create({
      component: RecordDetailComponent,
      componentProps: {
        record: this.record
      }
    });
    return await modal.present();
  }
}
