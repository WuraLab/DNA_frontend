import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-new-password",
  templateUrl: "./new-password.page.html",
  styleUrls: ["./new-password.page.scss"],
})
export class NewPasswordComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
  ) {}

  
  ngOnInit() {
    this.passwordForm = this.fb.group({
      email: ["mailto@mail.com"],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: [""]
    });
  }

  confirmPassword() {}
}
