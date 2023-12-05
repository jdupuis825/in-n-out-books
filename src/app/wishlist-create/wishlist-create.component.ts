// Name: Jocelyn Dupuis
// File: wishlist-create.component.ts
// Date: 11/21/2023
// Description: TS file for wishlist-create component

//import statements
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
//exports
export class WishlistCreateComponent implements OnInit {

  //output statement
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  // variable added for wishlist item
  item: IWishlistItem;

  constructor() {
    //new instance of IWishlistItem object
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  //creates new object literal and add object when user adds wishlist items
  addItem () {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }

}
