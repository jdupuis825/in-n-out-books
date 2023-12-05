// Name: Jocelyn Dupuis
// File: app.component.ts
// Date: 12/05/2023
// Description: TS file for books service

//import statements
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//exports
export class BooksService {
  //variable created of type string
  //array holds book isbns numbers
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  //services constructor
  constructor(private http: HttpClient) {

   }
   // returns an observable array of IBooks
   getBooks() {
    //new variable created
    let params = new HttpParams();
    //params append function to ass entries
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    //return http.get function passing in the open library url and params object
    return this.http.get('https://openlibrary.org/api/books', {params:params});
   }

}
