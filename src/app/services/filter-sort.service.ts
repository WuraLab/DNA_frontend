import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FilterSortService {

  constructor() { }

  private _objArrayCheck(array: any[]): boolean {
    // Checks if the first item in the array is an object
    // (assumes same-shape for all array items)
    // Necessary because some arrays passed in may have
    // models that don't match {[key: string]: any}[]
    // This check prevents uncaught reference errors
    const item0 = array[0];
    const check = !!(array.length && item0 !== null && Object.prototype.toString.call(item0) === "[object Object]");
    return check;
  }


  orderByDate(array: any[], prop: string, reverse?: boolean) {
    // Order an array of objects by a date property
    // Default: ascending (1992->2017 | Jan->Dec)
    if (!prop || !this._objArrayCheck(array)) {
      return array;
    }
    const sortedArray = array.sort((a, b) => {
      const dateA = new Date(a[prop]).getTime();
      const dateB = new Date(b[prop]).getTime();
      return !reverse ? dateA - dateB : dateB - dateA;
    });
    return sortedArray;
  }

  getRecentRecords(array: any[]) {
  return array.slice(0,5);
  }

  filterItems(array: any[], searchTerm: string) {
    return array.filter(record => {
      let data = record.name.toLowerCase();
      let term = searchTerm.toLowerCase();

      return data.indexOf(term.toLowerCase()) > -1;
    });
  }
}
