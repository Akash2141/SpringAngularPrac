import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  books:Array<any>;
  constructor(private bookService:BooksService) { }

  ngOnInit() {
    this.bookService.getAll().subscribe(data=>{
      this.books=data;
    });
  }

  addBooks(){
    this.bookService.storeBooks(this.books).subscribe(
      (data)=>console.log(data)
    );
  }


}
