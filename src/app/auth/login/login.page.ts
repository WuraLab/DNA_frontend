import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../authentication.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = [];
  notify: string;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // eslint-disable-next-line max-len
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(emailRe)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });

    this.route.queryParams.subscribe((params) => {
      const key1 = "registered";
      const key2 = "loggedOut";

      // check if user was redirected from signup page or user loggegout
      if (params[key1] === "success") {
        this.notify = "You have been successfully registered, Please Log in!";
      }
      if (params[key2] === "success") {
        this.notify = "You have been loggedout successfully!";
      }
    });
  }

  login() {
    this.errors = [];
    this.auth.login(this.loginForm.value).subscribe(
      (token) => {
        this.router.navigate(["/dashboard"], {
          queryParams: { loggedin: "success" },
        });
      },
      (errorResponse) => {
        console.log(errorResponse);
        this.errors.push(errorResponse.error);
      }
    );
  }
}
