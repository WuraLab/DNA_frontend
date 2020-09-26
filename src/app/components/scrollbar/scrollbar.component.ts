import { NavController } from "@ionic/angular";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { endOfToday, formatDistance } from "date-fns";

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
export class ScrollbarComponent implements OnInit {
  avatar = "assets/avatar/png";
  transLoading: boolean;
  @Input() recentTrans: any;
  formattedTrans
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
        this.formattedTrans = this.recentTrans.map((trans) => {
          trans.fCreateDate = formatDistance(
            new Date(trans.created),
            new Date(endOfToday()),
            { addSuffix: true }
          )
          return (trans)        
        })
        console.log(this.formattedTrans)
      }
    }
  }

  ngOnInit() {
  }

  navToCreate() {
    this.nav.navigateForward("/create");
  }
}
