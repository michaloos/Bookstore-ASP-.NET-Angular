import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  public authorName: object;

  constructor(public dialogRef: MatDialogRef<DetailBookComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,
  public authorService: AuthorService) {
    this.authorName = data.authorData;
   }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
