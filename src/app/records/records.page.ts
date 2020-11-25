import { ActivatedRoute } from "@angular/router";
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
  sortAs: string;
  selectedIndex = 0;

  constructor(
    private recordService: RecordService,
    private nav: NavController,
    private route: ActivatedRoute
  ) { 
    this.categories = [
      {
        title: "All",
        url: "/"
      }, {
        title: "Active",
        url: "/"
      }, {
        title: "Due",
        url: "/"
      }, {
        title: "Cleared",
        url: "/"
      } 
    ]
  }

 
  navToCreate() {
    this.nav.navigateForward("/create");

  }

  setSortBy(sort) {
    this.sortAs = sort
    console.log(this.sortAs)
  }

  ngOnInit() {
      this.recordService.getLoans().subscribe((records: any) => {
          this.records = records;
      });

      const path = window.location.pathname.split("records/")[1];
      if (path !== undefined) {
        this.selectedIndex = this.categories.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
      }
    
      console.log(path);

      this.route
  }

}
