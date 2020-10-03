import { Injectable } from "@angular/core";
import { formatDistanceToNow } from "date-fns";

@Injectable({
  providedIn: "root"
})
export class DateServiceService {

  constructor() { } 

  formatAsDate(trans: any) {
    return {
      ...trans,
      fCreateDate:formatDistanceToNow(
        new Date(trans.created),
        {addSuffix: true}
      ) ,
      fDueDate: formatDistanceToNow(
        new Date(trans.due_date),
        {addSuffix: true}
      ), 
      loanDue: this.loanDue(trans.due_date)
    }      
  }

  loanDue(dueDate: any): boolean {
    const now = new Date();
    const then = new Date(dueDate.toString());
    return now >= then;
  }
}
