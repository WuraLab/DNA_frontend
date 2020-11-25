/*
 *ngFor="let c of oneDimArray | sortBy:true/false:'asc'"
 *ngFor="let c of arrayOfObjects | sortBy:true/false:'asc':'propertyName'"
*/
import { Pipe, PipeTransform } from "@angular/core";
import { orderBy,sortBy } from "lodash";


// {
//   id: 1,
//   name: "Azeez Lukman",
//   user: 4,
//   amount: 100000,
//   interest_rate: "10.00",
//   description: "Douglas loaned money for School fees.",
//   balance_to_pay: 110000,
//   due_date: "2020-10-20"
// },
@Pipe({ name: "sortBy" })

export class SortPipe implements PipeTransform {

  transform(records: any[],sort: string, filter: string, order: string): any[] {
  if (sort === "" || !sort ) {
    return records;
  }

  //  sort by
  const sorted= () => { 
    if (sort === "name") {
    return records.sort(function (x, y) {
      let a = x["name"].toUpperCase(),
          b = y["name"].toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
      });
    }


    // date
    if (sort === "date") {
    return records.sort(function (x, y) {
      let a = x["created"],
          b = y["created"];
      return a - b;
      });
    }

    // Amount
    if (sort === "amount") {
    return records.sort(function (x, y) {
      return x["amount"] - y["amount"];
      });
    }
  }
  
  return sorted();
  // // filter
  //   // loaned
  //   records.filter(record => record.type === "loaned")
  //   // borrowed
  //   records.filter(record => record.type === "borrowed")
  // }
}
}
