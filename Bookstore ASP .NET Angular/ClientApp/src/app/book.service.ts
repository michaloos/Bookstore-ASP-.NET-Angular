import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Books } from './books/books.component';

@Injectable({
  providedIn: 'root'
})

export class BookService{
    public baseURL: any;
    public books: Books[];
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
      this.baseURL = baseUrl;
    }

    getBooks(){
      return this.http.get<Books[]>(this.baseURL + 'api/BookModels');
    }

    getBook(id){
      return this.http.get(this.baseURL + 'api/BookModels/' + id, this.httpOptions)
    }

    createBook(book){
      return this.http.post(this.baseURL + 'api/BookModels/', JSON.stringify(book), this.httpOptions)
    }

    updateBook(id,book){
      return this.http.put(this.baseURL + 'api/BookModels/' + id, JSON.stringify(book), this.httpOptions)
    }

    deleteBook(id){
      return this.http.delete(this.baseURL + 'api/BookModels/' + id, this.httpOptions);
    }
}