import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-autor',
  templateUrl: './delete-autor.component.html',
  styleUrls: ['./delete-autor.component.css']
})
export class DeleteAutorComponent implements OnInit {
  public books: any;
  public ableToDelete: boolean;
  constructor(public dialogRef: MatDialogRef<DeleteAutorComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.books = data.booksData;
    if(this.books.length == 0){
      this.ableToDelete = true;
    }else{
      this.ableToDelete = false;
    }
   }

  ngOnInit() {
  }

  delete(){
    this.dialogRef.close(true);
  }

  close(){
    this.dialogRef.close();
  }
}
