// Name: Jocelyn Dupuis
// File: book-details-dialog.component.ts
// Date: 11/16/2023
// Description: TS file for book-details-dialog components

//import statements
import { Component, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
//exports
export class BookDetailsDialogComponent implements OnInit {
  //variable created
  book: IBook;

  // constructor with dialogRef and data parameters
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    //sets book variable to current book data
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
