import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  booksData: Book[];
  constructor() {
    this.setupInitialData();
  }

  ngOnInit() {

  }

  setupInitialData() {
    this.booksData = [
      {
        bookid: 1,
        bookname: 'Objective Computer Awareness',
        bookDescription: 'Objective Computer Awareness',
        bookurl: new URL('https://images-eu.ssl-images-amazon.com/images/I/51OFLTn-%2BML._SL150_.jpg')
      },
      {
        bookid: 2,
        bookname: 'The C Programming Language',
        bookDescription: 'The C Programming Language',
        bookurl: new URL('https://images-eu.ssl-images-amazon.com/images/I/91Q9FleAmVL._SL150_.jpg')
      },
      {
        bookid: 3,
        bookname: 'Java - The Complete Reference Herbert Schildt',
        bookDescription: 'Java - The Complete Reference Herbert Schildt',
        bookurl: new URL('https://images-eu.ssl-images-amazon.com/images/I/51k5NgL%2BB%2BL._SL150_.jpg')
      },
      {
        bookid: 4,
        bookname: 'Core Python Programming',
        bookDescription: 'Core Python Programming',
        bookurl: new URL('https://images-eu.ssl-images-amazon.com/images/I/51Ss-7j3v5L._SL150_.jpg')
      },
      {
        bookid: 5,
        bookname: 'Head First Design Patterns',
        bookDescription: 'Head First Design Patterns',
        bookurl: new URL('https://images-eu.ssl-images-amazon.com/images/I/71%2B-AOZQNlL._SL150_.jpg')
      }

    ]
  }

}
