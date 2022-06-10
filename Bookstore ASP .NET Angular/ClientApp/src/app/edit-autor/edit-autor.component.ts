import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-autor',
  templateUrl: './edit-autor.component.html',
  styleUrls: ['./edit-autor.component.css']
})
export class EditAutorComponent implements OnInit {
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditAutorComponent>) {
    this.form = new FormGroup({
      autorId: new FormControl(data.autorId),
      fisrtName: new FormControl(data.fisrtName, Validators.required),
      lastName: new FormControl(data.lastName, Validators.required),
      country: new FormControl(data.country, Validators.required),
    });
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close(null);
  }

  save(){
    this.dialogRef.close(this.form.value);
  }
}
