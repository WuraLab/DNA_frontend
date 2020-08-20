import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardComponent implements OnInit {
  authState;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authState = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
