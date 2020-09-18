import { Component, Input, OnInit } from "@angular/core";

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

  constructor() {
    this.transLoading = true;
  }

  ngOnInit() {
    if (this.recentTrans) {
      this.transLoading = false;
    }
  }
}
