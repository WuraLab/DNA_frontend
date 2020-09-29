import { RecordService } from "./../services/record.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { format, endOfToday, add, sub } from "date-fns";

@Component({
  selector: "app-create-record",
  templateUrl: "./create-record.page.html",
  styleUrls: ["./create-record.page.scss"],
})
export class CreateRecordComponent implements OnInit {
  loginForm;
  today: string;
  maxDate: string;
  minDate: string;
  rangeformat = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
  loading: boolean;

  constructor(private fb: FormBuilder, private record: RecordService) {
    this.loading = false;
    // today's date returned in formatted string
    this.today = format(Date.now(), this.rangeformat);
    // set minimun date to 20 years to today's date and also return formatted string
    this.minDate = format(
      sub(Date.now(), {
        years: 20,
      }),
      this.rangeformat
    );
  console.log(this.minDate)
    // add 20 years to today's date and also return formatted string
    // this.maxDate = format(
    //   add(new Date(this.today), {
    //     years: 20,
    //   }),
    //   this.rangeformat
    // );

    this.maxDate = format(
        add(Date.now(), {
          years: 20,
        }),
        this.rangeformat
      );
  console.log(this.maxDate)

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
    this.record.createRecord(this.loginForm.value).subscribe(
      data => {
        this.loading = false;
        alert("Successfully created record");
      },
      errorResponse => {
        this.loading = false;
        console.log(errorResponse.error);
      }
    );
  }
}
