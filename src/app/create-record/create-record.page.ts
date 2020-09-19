import { RecordService } from "./../services/record.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-record",
  templateUrl: "./create-record.page.html",
  styleUrls: ["./create-record.page.scss"],
})
export class CreateRecordPage implements OnInit {
  loginForm;
  constructor(private fb: FormBuilder, private record: RecordService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      rate: ["", [Validators.required]],
      category: ["", [Validators.required]],
      start: ["", [Validators.required]],
      end: ["", [Validators.required]],
      desc: ["", [Validators.required]],
    });
  }

  onSubmit() {
    this.record.createRecord(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
      },
      (errorResponse) => {
        // this.errors.push(errorResponse.error.username);
        console.log(errorResponse.error);
      }
    );
  }
}
