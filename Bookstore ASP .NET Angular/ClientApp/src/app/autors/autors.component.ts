import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorService } from '../author.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BookService } from '../book.service';
import { DetailAutorComponent } from '../detail-autor/detail-autor.component';
import { DeleteAutorComponent } from '../delete-autor/delete-autor.component';
import { AddAutorComponent } from '../add-autor/add-autor.component';
import { EditAutorComponent } from '../edit-autor/edit-autor.component';

@Component({
  selector: 'app-autors',
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.css']
})
export class AutorsComponent implements OnInit{
  public authors: Authors[];

  constructor(private matDialog: MatDialog, public bookService: BookService, public authorService: AuthorService) {
    this.getAllAuthors();
  }

  ngOnInit(){
    this.getAllAuthors();
  }

  getAllAuthors(){
    this.authorService.getAuthors().subscribe(result => {
      this.authors = result;
    }, error => console.error(error));
  }

  openDialogDelete(data){
    var authorId = data.autorId;
    var books: any;
    this.bookService.getBooks().subscribe(result => {
      books = result.filter(a=>a.autorId == authorId);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {authorData: data, booksData: books};
      const dialogRef = this.matDialog.open(DeleteAutorComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        if(result == true){
          this.authorService.deleteAuthor(authorId).subscribe(()=> {
            this.getAllAuthors();
          }, error => console.error(error));
        }
      });
    });
  }

  openDialogDetails(data){
    var authorId = data.autorId;
    var books: any;
    this.bookService.getBooks().subscribe(result => {
      books = result.filter(a=>a.autorId == authorId);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {authorData: data, booksData: books};
      const dialogRef = this.matDialog.open(DetailAutorComponent, dialogConfig);
  
      dialogRef.afterClosed();
    });
    
  }

  openDialogEdit(data){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    const dialogRef = this.matDialog.open(EditAutorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(author => {
      if(author != null){
        this.authorService.updateAuthor(data.autorId,author).subscribe(()=>{
          this.getAllAuthors();
        }, error => console.error(error));
      }
    });
  }

  openDialogAddAuthor(){
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matDialog.open(AddAutorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(author => {
      if(author != null){
        this.authorService.createAuthor(author).subscribe(()=>{
          this.getAllAuthors();
        }, error => console.error(error));
      }
    });
  }

  sortAZFirstName(){
    this.authors = this.authors.sort((a,b) => a.fisrtName.localeCompare(b.fisrtName));
  }

  sortZAFirstName(){
    this.authors = this.authors.sort((a,b) => b.fisrtName.localeCompare(a.fisrtName));
  }

  sortAZLastName(){
    this.authors = this.authors.sort((a,b) => a.lastName.localeCompare(b.lastName));
  }

  sortZALastName(){
    this.authors = this.authors.sort((a,b) => b.lastName.localeCompare(a.lastName));
  }

  public inputFirstName: string;
  public inputLastName: string;
  public inputCountry: string;

  cancelActions(){
    this.getAllAuthors();
    this.inputFirstName = '';
    this.inputLastName = '';
    this.inputCountry = '';
  }

  filterFirstName(data: string, authors){
    let result: any;
      result = authors.filter((author) =>{
      return author.fisrtName.toLowerCase().includes(data.toLowerCase());
    });
    return result;
  
  }

  filterLastName(data: string, authors){
    let result: any;
    result = authors.filter((author) =>{
      return author.lastName.toLowerCase().includes(data.toLowerCase());
    });
    return result;   
  }

  filterCountry(data: string, authors){
    let result: any;
      result = authors.filter((author) =>{
      return author.country.toLowerCase().includes(data.toLowerCase());
    });
    return result;
  }

  filtr(){
    let result: any;
    this.authorService.getAuthors().subscribe(authors =>{
      result = authors;
      if(this.inputFirstName != undefined){
        result = this.filterFirstName(this.inputFirstName,result);
      }
      if(this.inputLastName != undefined){
        result = this.filterLastName(this.inputLastName,result);
      }
      if(this.inputCountry != undefined){
        result = this.filterCountry(this.inputCountry,result);
      }
      this.authors = result;
    });    
  }
}

export interface Authors {
  autorId: number;
  fisrtName: string;
  lastName: string;
  country: string;
}
