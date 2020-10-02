import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { formatDistanceToNow } from "date-fns";

const APIBaseUrl = "https://dnappserver.herokuapp.com/api/v1";

@Injectable({
  providedIn: "root",
})
export class RecordService {
  sessionToken;

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.get("USER_INFO").then(info => {
      this.sessionToken = info.sessionToken;
    });
  }

  getLoans() {
    console.log(this.sessionToken);
    return this.http.get(`${APIBaseUrl}/loan/`, {
      headers: {
        Authorization: `token ${this.sessionToken}`,
      },
    }).pipe(
     map((trans: any) => {
        console.log(1)
        // console.log(trans.result.created)
        //   trans.fCreateDate =  formatDistanceToNow(
        //     new Date(trans.created),
        //     {addSuffix: true}
        //   )
        //   console.log(trans)
        //   return trans        
      })
     )
  }

  createRecord(info: any) {
    let formattedData = {
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
}
