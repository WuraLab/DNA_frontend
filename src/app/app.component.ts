import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { AuthenticationService } from "./auth/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.show();
      this.statusBar.backgroundColorByHexString("#1f3d5a")
      this.splashScreen.hide();

      // this.authenticationService.authState.subscribe(state => {
      //   if (state) {
      //     this.router.navigate(["dashboard"]);
      //   } else {
      //     this.router.navigate(["login"]);
      //   }
      // });
    });
  }

  ngOnInit() {}
}
