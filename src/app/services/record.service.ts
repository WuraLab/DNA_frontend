import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { DateServiceService } from "./date-service.service";

const APIBaseUrl = "https://dnappserver.herokuapp.com/api/v1";
let mockData = {
  message: "User loan Records ",
  result: [
      {
          id: 1,
          name: "Azeez Lukman",
          user: 4,
          amount: 13000,
          interest_rate: "10.00",
          description: "Douglas loaned money for School fees.",
          balance_to_pay: 110000,
          due_date: "2020-10-20"
      },
      {
        id: 2,
        name: "Chinwe Hassan",
        user: 4,
        amount: 23000,
        interest_rate: "10.00",
        description: "Douglas loaned money for School fees.",
        balance_to_pay: 110000,
        due_date: "2020-10-20"
    },
    {
      id: 3,
          name: "Uba Bank",
          user: 4,
      amount: 570000,
      interest_rate: "10.00",
      description: "Douglas loaned money for School fees.",
      balance_to_pay: 110000,
      due_date: "2020-10-20"
  },
  {
    id: 4,
    name: "Mr Lapo",
    user: 4,
    amount: 620000,
    interest_rate: "10.00",
    description: "Douglas loaned money for School fees.",
    balance_to_pay: 110000,
    due_date: "2020-10-20"
}
  ]
}
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

  getLoans() : Observable<Array<any>> {
    // return this.http
    //   .get(`${APIBaseUrl}/loan/`, {
    //     headers: {
    //       Authorization: `token ${this.sessionToken}`,
    //     },
    //   })
    //   .pipe(
    //     map((res: any) => {
    //       return res.result.map((record: any) => {
    //         return this.dateService.formatAsDate(record);
    //       });
    //     })
    //   );
    return new Observable(observer => {
      // observable execution
      observer.next(mockData.result);
      observer.complete();
    });
    // return observer.next(mockData);
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
    // return this.http.post(`${APIBaseUrl}/loan/`, formattedData, {
    //   headers: {
    //     Authorization: `token ${this.sessionToken}`,
    //   },
    // });
  }
}
