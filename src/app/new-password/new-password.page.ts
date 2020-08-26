import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../services/authentication.service";

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
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  confirmPassword() {}
}
