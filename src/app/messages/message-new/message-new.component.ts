import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-message-new",
  templateUrl: "./message-new.component.html",
  styleUrls: ["./message-new.component.css"]
})
export class MessageNewComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  priorities: string[] = ["High", "Medium", "Low"];
  departments: object[] = [
    {
      if: 1,
      name: "Complaints"
    },
    {
      if: 2,
      name: "Loyalty"
    },
    {
      if: 3,
      name: "Promotions"
    }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ["", Validators.required],
      priorityCtrl: ["", Validators.required],
      departmentCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ["", Validators.required]
    });
  }
  // should strong type name but we have an object
  getDepartmentName(department: object) {
    return department ? department["name"] : undefined;
  }
}
