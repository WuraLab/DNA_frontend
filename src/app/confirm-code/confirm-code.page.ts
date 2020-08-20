import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-confirm-code",
  templateUrl: "./confirm-code.page.html",
  styleUrls: ["./confirm-code.page.scss"],
})
export class confirmCodeComponent implements OnInit {
  codeForm: FormGroup
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.codeForm = this.fb.group({
      code: ["", [Validators.required]]
    });
  }

}
