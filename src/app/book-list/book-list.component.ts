// Name: Jocelyn Dupuis
// File: book-list.component.ts
// Date: 12/05/2023
// Description: TS file for book-list components

// import statements
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
//export
export class BookListComponent implements OnInit {
  // variables created
  books: Array<IBook> = [];
  book: IBook;

  //add BooksService and MatDialog to constructor
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    //subscribe getBooks() function
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      //check to see if the res.hasOwnProperty(key) is true
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            //maps through authors array
            authors = res[key].details.authors.map(function(author) {
              //returns authors name
              return author.name;
          })
        }
        //push new object to books array
        this.books.push({
          isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
          title: res[key].details.title,
          description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
          numOfPages: res[key].details.number_of_pages,
          authors: authors
        })
        }
      }
    })
  }

  ngOnInit(): void {
  }
  // call and map to the return object to the book variable
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);

    //create dialogRef object assigned to dialog.open function
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      //object literal and nested object literal assigned to book variable (match current book)
      data: {
        book: this.book
      },
      //disable set to true with width of 800px
      disableClose: true,
      width: '800px'
    })

    //to test service is returning the correct book
    console.log(this.book);

    //dialog box closed will reset book value to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }

}
