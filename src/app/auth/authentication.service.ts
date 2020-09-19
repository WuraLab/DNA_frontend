import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { ToastController, Platform } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

const jwt = new JwtHelperService();

@Injectable()
export class AuthenticationService {
  headers = new HttpHeaders()
    .set("content-type", "application/json")
    .set("Access-Control-Allow-Origin", "*");

  public authState = new BehaviorSubject(false);
  private decodedToken: any;
  private baseRoute = "https://dnappserver.herokuapp.com/api/v1/";

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    private http: HttpClient
  ) {
    this.platform.ready().then(() => {
      this.isLoggedIn();
    });
  }

  isLoggedIn() {
    this.storage.get("USER_INFO").then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  public signup(userData: any): Observable<any> {
    let formatedData = {
      username: userData.email,
      password: userData.password,
      email: userData.email,
      first_name: userData.name,
    };
    return this.http.post(`${this.baseRoute}user/`, formatedData);
  }

  public login(userData: any): Observable<any> {
    let formatedData = {
      username: userData.email,
      password: userData.password,
    };

    return this.http.post(`${this.baseRoute}login/`, formatedData).pipe(
      map((res: any) => {
        let token = res.token;
        return token;
      })
    );
  }

  public getUser(id: any): Observable<any> {
    console.log(id);
    let isd = "692f483624ccea4e4474a26f3081c273f43884ca";
    return this.http.get(`${this.baseRoute}profile/`, {
      headers: {
        Authorization: `token ${isd}`,
      },
    });
  }

  // private saveToken(token: any): any {
  //   this.decodedToken = jwt.decodeToken(token);
  //   localStorage.setItem("auth_token", token);
  //   localStorage.setItem("auth_meta", JSON.stringify(this.decodedToken));
  //   return token;
  // }

  logout() {
    this.storage.remove("USER_INFO").then(() => {
      this.router.navigate(["login"]);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }

  passwordRecovery(email) {
    return this.http.post(`${this.baseRoute}recovery/`, email);
  }

  validateToken(token) {
    return this.http.post(`${this.baseRoute}recovery/`, token)
  }
}
