import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-new-password",
  templateUrl: "./new-password.page.html",
  styleUrls: ["./new-password.page.scss"],
})
export class NewPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  email: string;
  token;
  errorMessage: string;
  isFetching: boolean;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private activtedRoute: ActivatedRoute,
    private auth: AuthenticationService
  ) {
    this.isFetching = false;
  }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      email: [{ value: this.email, disabled: true }],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: [""],
    });

    this.activtedRoute.queryParams.subscribe((params) => {
      this.email = params["email"];
      this.token = params["token"];
    });
  }

  confirmPassword() {
    this.auth
      .resetPassword(this.token, this.passwordForm.value.password)
      .subscribe(
        (res) => {
          this.isFetching = false;
          this.route.navigate(["/login"]);
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
