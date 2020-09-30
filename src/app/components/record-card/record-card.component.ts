import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-record-card",
  templateUrl: "./record-card.component.html",
  styleUrls: ["./record-card.component.scss"],
})
export class RecordCardComponent implements OnInit {
  @Input() record: any;

  constructor() { }

  ngOnInit() {
    this.record = this.record[0];
  }

}
