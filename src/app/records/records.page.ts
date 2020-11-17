import { NavController } from "@ionic/angular";
import { RecordService } from "./../services/record.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-records",
  templateUrl: "./records.page.html",
  styleUrls: ["./records.page.scss"],
})
export class RecordsComponent implements OnInit {
  records: any;
  categories = [];

  constructor(
    private recordService: RecordService,
    private nav: NavController
  ) { 
    this.categories = ["All", "Active", "Due", "Cleared" ]
  }

 
  navToCreate() {
    this.nav.navigateForward("/create");
  }

  ngOnInit() {
      this.recordService.getLoans().subscribe((records: any) => {
          this.records = records;
      });
  }

}
