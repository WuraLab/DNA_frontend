import { FilterSortService } from "./../services/filter-sort.service";
import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchComponent implements OnInit {
  @Input() records: any;
  searchTerm: "";
  searchResult = []

  constructor(private modalCtrl: ModalController, private fs: FilterSortService) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  filterRecords(searchTerm : string) {
    this.searchResult = this.fs.filterItems(this.records, searchTerm)
  }
  
  ngOnInit() {
    this.filterRecords("");
  }

}
