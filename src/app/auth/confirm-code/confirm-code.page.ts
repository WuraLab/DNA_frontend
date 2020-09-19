import { Router } from "@angular/router";
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
  message;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.codeForm = this.fb.group({
      code: ["", [Validators.required]],
    });
  }

  continue() {
    this.message = "";
    this.auth.validateToken(this.codeForm.value).subscribe((res: any) => {
      if (res.status == 200) {
        this.router.navigate(["/new-password"]);
      } else {
        this.message = res.message;
      }
    });
  }
}
