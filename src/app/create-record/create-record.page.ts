import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-record",
  templateUrl: "./create-record.page.html",
  styleUrls: ["./create-record.page.scss"],
})
export class CreateRecordPage implements OnInit {
  loginForm;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ["", [Validators.required]],
      category: ["", [Validators.required]],
    });
  }

  onSubmit() {
    console.log("Submitted form");
  }
}
