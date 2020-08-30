import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errors: any = [];

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    // eslint-disable-next-line max-len
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.signupForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.pattern(emailRe)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  signup(): void {
    this.errors = [];
    this.auth.signup(this.signupForm.value)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(["/login"], { queryParams: { registered: "success" } });
       },
        errorResponse => {
          this.errors.push(errorResponse.error.username);
          console.log(this.errors)
        });
  }
}
