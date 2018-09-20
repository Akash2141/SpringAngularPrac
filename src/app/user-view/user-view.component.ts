import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { bookData } from '../app.component';

@Component({
  selector: 'user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  books:Array<any>;
  constructor(private bookService:BooksService) { }
  bookName=''
  id:number=0;
  delId=0
  delBookName=''
  ngOnInit() {
    this.getBooks()
  }

  getBooks(){
    this.bookService.getAll().subscribe(data=>{
      this.books=data
    });
  };
  addBooks(){
    this.bookService.storeBooks(new bookData(this.id,this.bookName))
    .subscribe((data)=>console.log(data)),
    this.getBooks()
  }
  deleteBook(){
    this.bookService.deleteBook(new bookData(this.id,this.bookName))
    .subscribe((data)=>console.log(data)),
    this.getBooks()
  }
  upBooks(){
    this.bookService.upBooks(new bookData(this.delId,this.delBookName))
    .subscribe((data)=>console.log(data)),
    this.getBooks()
  }
};
