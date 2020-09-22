import { AuthGuardService } from "./../auth-guard.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;
  isFetching: boolean;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.isFetching = false;
  }

  ngOnInit() {
    // eslint-disable-next-line max-len
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.resetForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(emailRe)]],
    });
  }

  sendMail() {
    this.isFetching = true;
    this.errorMessage = "";

    this.authService.passwordRecovery(this.resetForm.value).subscribe(
      (res: any) => {
        this.router.navigate(["/confirm-code"], {
          queryParams: { email: this.resetForm.value.email },
        });
        console.log(res);
      },
      (err) => {
        console.log(err);
        if (err.status === 0) {
          this.errorMessage =
            "Please check your internet connection and try again!";
        } else if (err.status === 400) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage =
            "An error occoured while resetting your password please try again later";
        }
        this.isFetching = false;
      }
    );
  }
}
