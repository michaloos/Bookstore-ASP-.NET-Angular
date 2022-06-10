import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Author } from '../autor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent{
  form: FormGroup;
  authors: Author[] = [];

  constructor(public dialogRef: MatDialogRef<EditBookComponent>, public authorService: AuthorService, @Inject(MAT_DIALOG_DATA) public data: any) {

    authorService.getAuthors().subscribe(result => {
      this.authors = result;
    }, error => console.error(error));

    this.form = new FormGroup({
      bookId: new FormControl(data.bookId),
      title: new FormControl(data.title,Validators.required),
      year_of_publish: new FormControl(data.year_of_publish,Validators.required),
      isbn: new FormControl(data.isbn,[ Validators.minLength(13), Validators.maxLength(13), Validators.required]),
      autorId: new FormControl(data.autorId, Validators.required)
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
