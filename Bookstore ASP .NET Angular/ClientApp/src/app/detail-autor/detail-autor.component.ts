import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detail-autor',
  templateUrl: './detail-autor.component.html',
  styleUrls: ['./detail-autor.component.css']
})
export class DetailAutorComponent implements OnInit {
  public books: any;
  constructor(public dialogRef: MatDialogRef<DetailAutorComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.books = data.booksData;
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
