import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css']
})
export class AddAutorComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddAutorComponent>) {
    this.form = new FormGroup({
      fisrtName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
    });
   }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close(null);
  }
}
