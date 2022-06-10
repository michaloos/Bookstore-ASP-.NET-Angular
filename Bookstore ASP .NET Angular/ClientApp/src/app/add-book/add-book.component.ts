import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Author } from '../autor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent{
  form: FormGroup;
  authors: Author[] = [];

  constructor(public dialogRef: MatDialogRef<AddBookComponent>, public authorService: AuthorService) {

    authorService.getAuthors().subscribe(result => {
      this.authors = result;
    }, error => console.error(error));

    this.form = new FormGroup({
      title: new FormControl('',Validators.required),
      year_of_publish: new FormControl('',Validators.required),
      isbn: new FormControl('',[ Validators.minLength(13), Validators.maxLength(13), Validators.required]),
      autorId: new FormControl('', Validators.required)
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
