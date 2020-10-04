import { DEFAULT_CURRENCY_CODE, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuardService } from "./auth/auth-guard.service";
import { AuthenticationService } from "./auth/authentication.service";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: "__mydb",
      driverOrder: ["indexeddb", "sqlite", "websql"],
    }),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuardService,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: DEFAULT_CURRENCY_CODE, useValue: "₦" }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
