// Name: Jocelyn Dupuis
// File: wishlist.component.ts
// Date: 11/21/2023
// Description: TS file for wishlist component

//import statements
import { Component, OnInit } from '@angular/core';

import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
//exports
export class WishlistComponent implements OnInit {
  //variable created as empty array
  items: Array<IWishlistItem> = []
  constructor() { }

  ngOnInit(): void {
  }
  //takes in new wishlist item and adds item to array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item)
  }

}
