import { ActivatedRoute } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { RecordService } from "./../services/record.service";
import { Component, OnInit } from "@angular/core";
import { SearchComponent } from "../search/search.page";

@Component({
  selector: "app-records",
  templateUrl: "./records.page.html",
  styleUrls: ["./records.page.scss"],
})
export class RecordsComponent implements OnInit {
  records: any;
  categories = [];
  sortAs: string;
  type: any;
  selectedIndex = 0;
  order: boolean;

  constructor(
    private recordService: RecordService,
    private nav: NavController,
    private route: ActivatedRoute,
    public modalController: ModalController,
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
  }

  setType(type) {
    this.type = type
  }

  setOrder(order: boolean) {
    this.order = order;
  }

  async presentSearchModal() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      componentProps: {
        records: this.records
      }
    });
    return await modal.present();
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
