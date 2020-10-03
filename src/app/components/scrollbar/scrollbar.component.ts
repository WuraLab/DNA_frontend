import { FilterSortService } from "./../../services/filter-sort.service";
import { NavController } from "@ionic/angular";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { endOfToday, formatDistance, formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";

interface transaction {
  name: String;
  Date: String;
  type: String;
  Img: String;
  Amount: Number;
  category: String;
}

@Component({
  selector: "app-scrollbar",
  templateUrl: "./scrollbar.component.html",
  styleUrls: ["./scrollbar.component.scss"],
})
export class ScrollbarComponent implements OnInit, OnChanges {
  avatar = "assets/avatar/png";
  transLoading: boolean;
  @Input() recentTrans: any;
  
  constructor(private nav: NavController) {
    this.transLoading = true;
  }

  ngOnChanges (changes: SimpleChanges) {
    // only run when property "recentTrans" changed
    if (changes["recentTrans"]) {
      this.transLoading = false;
      console.log(this.transLoading)

      if (this.recentTrans) {
        console.log(this.recentTrans)
      }
    }
  }

  ngOnInit() {
  }

  navToCreate() {
    this.nav.navigateForward("/create");
  }

  navToAllLoans() {
    this.nav.navigateForward("/records");
  }
}
