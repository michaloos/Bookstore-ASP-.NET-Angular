import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authors } from './autors/autors.component';

@Injectable({
  providedIn: 'root'
})

export class AuthorService{
    public baseURL: any;
    public books: Authors[];
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
      this.baseURL = baseUrl;
    }

    getAuthors(){
      return this.http.get<Authors[]>(this.baseURL + 'api/AutorModels');
    }

    getAuthor(id){
      return this.http.get(this.baseURL + 'api/AutorModels/' + id, this.httpOptions)
    }

    createAuthor(author){
      return this.http.post(this.baseURL + 'api/AutorModels/', JSON.stringify(author), this.httpOptions)
    }

    updateAuthor(id,author){
      return this.http.put(this.baseURL + 'api/AutorModels/' + id, JSON.stringify(author), this.httpOptions)
    }

    deleteAuthor(id){
      return this.http.delete(this.baseURL + 'api/AutorModels/' + id, this.httpOptions);
    }
}