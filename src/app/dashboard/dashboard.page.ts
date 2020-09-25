import { RecordService } from "./../services/record.service";
import { Storage } from "@ionic/storage";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../auth/authentication.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardComponent implements OnInit {
  authState;
  userInfo;
  records;

  categories = [
    { type: "Due Loans", value: 10 },
    { type: "Cleared Loans", value: 5 },
    { type: "Loans Collected", value: 28 },
    { type: "Loans Given", value: 23 },
  ];

  services = [
    { type: "Alert", icon: "notifications" },
    { type: "Payments", icon: "wallet" },
    { type: "Coming Soon", icon: "hourglass" },
    { type: "Coming Soon", icon: "hourglass" },
  ];

  constructor(
    private authService: AuthenticationService,
    private storage: Storage,
    private recordService: RecordService
  ) {}

  ngOnInit() {
    this.authState = this.authService.isAuthenticated();
    if (this.authState) {
      // this.storage.keys().then((info) => (this.userInfo = info));
      this.storage.get("USER_INFO").then(info => {
        this.userInfo = info;
        // let sessionToken = this.userInfo.sessionToken;
        this.recordService
          .getLoans()
          .subscribe(records => (this.records = records));
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
