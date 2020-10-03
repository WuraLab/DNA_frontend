import { RecordService } from "./../services/record.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-records",
  templateUrl: "./records.page.html",
  styleUrls: ["./records.page.scss"],
})
export class RecordsPage implements OnInit {
  records: any;

  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit() {
      this.recordService.getLoans().subscribe((records: any) => {
          this.records = records;
      });
  }

}
