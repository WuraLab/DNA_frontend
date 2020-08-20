import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // eslint-disable-next-line max-len
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.resetForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(emailRe)]]
    });
  }

}
