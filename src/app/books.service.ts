import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8081/books');
  }
  storeBooks(book:any[]){
    return this.http.post("http://localhost:8081/books",book,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
}
