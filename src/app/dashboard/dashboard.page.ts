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

  constructor(
    private authService: AuthenticationService,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.authState = this.authService.isAuthenticated();
    if (this.authState) {
      // this.storage.keys().then((info) => (this.userInfo = info));
      this.storage.get("USER_INFO").then((info) => {
        this.userInfo = info;
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
