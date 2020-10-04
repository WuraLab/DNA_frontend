import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { DateServiceService } from "./date-service.service";

const APIBaseUrl = "https://dnappserver.herokuapp.com/api/v1";

@Injectable({
  providedIn: "root",
})
export class RecordService {
  sessionToken;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private dateService: DateServiceService
  ) {
    this.storage.get("USER_INFO").then(info => {
      this.sessionToken = info.sessionToken;
    });
  }

  getLoans() {
    return this.http
      .get(`${APIBaseUrl}/loan/`, {
        headers: {
          Authorization: `token ${this.sessionToken}`,
        },
      })
      .pipe(
        map((res: any) => {
          return res.result.map((record: any) => {
            return this.dateService.formatAsDate(record);
          });
        })
      );
  }

  createRecord(info: any) {
    let formattedData = {
      name: info.name,
      amount: info.amount,
      interest_rate: info.rate,
      description: info.desc,
      due_date: info.end,
    };

    return this.http.post(`${APIBaseUrl}/loan/`, formattedData, {
      headers: {
        Authorization: `token ${this.sessionToken}`,
      },
    });
  }

  // deleteRecord() {
  //   return this.http.post(`${APIBaseUrl}/loan/`, formattedData, {
  //     headers: {
  //       Authorization: `token ${this.sessionToken}`,
  //     },
  //   });
  // }

  update(data) {
    return this.http.post(`${APIBaseUrl}/loan/`, formattedData, {
      headers: {
        Authorization: `token ${this.sessionToken}`,
      },
    });
  }
}
