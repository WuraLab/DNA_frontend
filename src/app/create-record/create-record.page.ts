import { RecordService } from "./../services/record.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { format, endOfToday, add, sub } from "date-fns";

@Component({
  selector: "app-create-record",
  templateUrl: "./create-record.page.html",
  styleUrls: ["./create-record.page.scss"],
})
export class CreateRecordPage implements OnInit {
  loginForm;
  today: string;
  maxDate: string;
  minDate: string;
  rangeformat = "yyyy-MM-dd";
  loading: boolean;

  constructor(private fb: FormBuilder, private record: RecordService) {
    this.loading = false;
    // today's date returned in formatted string
    this.today = format(endOfToday(), this.rangeformat);
    console.log("today", this.today);

    // set minimun date to 20 years to today's date and also return formatted string
    this.minDate = format(
      sub(new Date(this.today), {
        years: 20,
      }),
      this.rangeformat
    );
    console.log("mindate", this.minDate);

    // add 20 years to today's date and also return formatted string
    this.maxDate = format(
      add(new Date(this.today), {
        years: 20,
      }),
      this.rangeformat
    );
    console.log("maxdate", this.maxDate);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      rate: [0],
      category: ["", [Validators.required]],
      start: [this.today, [Validators.required]],
      end: [this.today, [Validators.required]],
      desc: [""],
    });
  }

  onSubmit() {
    this.loading = true;
    console.log(this.loading);
    this.record.createRecord(this.loginForm.value).subscribe(
      (data) => {
        this.loading = false;
        console.log(data);
        alert("Successfully created record");
      },
      (errorResponse) => {
        this.loading = false;
        console.log(errorResponse.error);
      }
    );
  }
}
