import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-confirm-code",
  templateUrl: "./confirm-code.page.html",
  styleUrls: ["./confirm-code.page.scss"],
})
export class confirmCodeComponent implements OnInit {
  codeForm: FormGroup;
  errorMessage;
  email: string;
  isFetching: boolean;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isFetching = false;
  }

  ngOnInit() {
    this.codeForm = this.fb.group({
      code: ["", [Validators.required]],
    });
    this.route.queryParams.subscribe((params) => {
      this.email = params["email"];
    });
  }

  continue() {
    this.isFetching = true;
    this.errorMessage = "";
    this.auth.validateToken(this.codeForm.value).subscribe(
      (res: any) => {
        this.isFetching = false;
        if (/active/.test(res.message)) {
          this.router.navigate(["/reset"], {
            queryParams: { email: this.email, token: this.codeForm.value.code },
          });
        } else {
          this.errorMessage = res.message;
        }
      },
      (err) => {
        console.log(err);
        if (err.status === 0) {
          this.errorMessage =
            "Please check your internet connection and try again!";
        } else if (err.status === 400) {
          this.errorMessage = err.error.errorMessage;
        } else {
          this.errorMessage =
            "An error occoured while resetting your password please try again later";
        }
        this.isFetching = false;
      }
    );
  }
}
