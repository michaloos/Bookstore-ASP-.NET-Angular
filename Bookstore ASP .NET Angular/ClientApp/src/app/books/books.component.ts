import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { BookService } from '../book.service';
import { AuthorService } from '../author.service';
import { DetailBookComponent } from '../detail-book/detail-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: Books[];

  constructor(private matDialog: MatDialog, public bookService: BookService, public authorService: AuthorService) {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getBooks().subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }

  ngOnInit(){
    this.getAllBooks();
  }

  openDialogDelete(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    var bookId = data.bookId;
    const dialogRef = this.matDialog.open(DeleteBookComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.bookService.deleteBook(bookId).subscribe(()=> {
          this.getAllBooks();
        }, error => console.error(error));
      }
    });
  }

  openDialogAddBook(){
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matDialog.open(AddBookComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(book => {
      if(book != null){
        this.bookService.createBook(book).subscribe(()=>{
          this.getAllBooks();
        }, error => console.error(error));
      }
    });
  }

  openDialogDetails(data){
    var authorName: any;
    this.authorService.getAuthor(data.autorId).subscribe(result =>{
      authorName = result;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {bookData: data, authorData: authorName};
      const dialogRef = this.matDialog.open(DetailBookComponent, dialogConfig);
  
      dialogRef.afterClosed();
    });
    
  }

  openDialogEdit(data){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    var bookId = data.bookId;
    const dialogRef = this.matDialog.open(EditBookComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(book => {
      if(book != null){
        this.bookService.updateBook(bookId,book).subscribe(()=>{
          this.getAllBooks();
        }, error => console.error(error));
      }
    });
  }

  sortAZ(){
    this.books = this.books.sort((a,b) => a.title.localeCompare(b.title));
  }

  sortZA(){
    this.books = this.books.sort((a,b) => b.title.localeCompare(a.title));
  }

  sortDateUp(){
    this.books = this.books.sort((a,b) => a.year_of_publish - b.year_of_publish);
  }

  sortDateDown(){
    this.books = this.books.sort((a,b) => b.year_of_publish - a.year_of_publish);
  }

  cancelActions(){
    this.getAllBooks();
  }

  filterTitle(data: string){
    let result: any;
    this.bookService.getBooks().subscribe(books =>{
        result = books.filter((book) =>{
        return book.title.toLowerCase().includes(data.toLowerCase());
      });
      this.books = result;
      console.log(result);
    });  
  }

  filterDate(data: number){
    let result: any;
    this.bookService.getBooks().subscribe(books =>{
        result = books.filter((book) =>{
        return book.year_of_publish.toString().includes(data.toString());
      });
      this.books = result;
    });  
  }
}

export interface Books {
  bookId: number;
  title: string;
  autorId: number;
  year_of_publish: number;
  ISBN: string;
}