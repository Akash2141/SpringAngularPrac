import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookData } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8081/books');
  }
  storeBooks(book:bookData){
    return this.http.post("http://localhost:8081/books",book);
  }
  deleteBook(book:bookData){
    return this.http.delete("http://localhost:8081/books/"+book.id);
  }
  upBooks(book:bookData){
    return this.http.put("http://localhost:8081/books",book);
  }
}
