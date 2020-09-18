import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const APIBaseUrl = "https://dnappserver.herokuapp.com/api/v1";

@Injectable({
  providedIn: "root",
})
export class RecordService {
  constructor(private http: HttpClient) {}

  getLoans(token) {
    console.log("service log");
    return this.http.get(`${APIBaseUrl}/loan/`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
  }
}
