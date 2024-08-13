import { Component, numberAttribute } from '@angular/core';

import { foodItemArr } from '../foodItemArr';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public FoodItemArr: foodItemArr ;
    public labels: string[] = ["Dosa",
    "Paneer",
    "Masala",
    "Noodles",
    "Fried Rice"];
    
    getFdLb(l:string){
      this.FoodItemArr.foods[this.FoodItemArr.getFd(l)].addCount();
    }
  constructor( FoodItemArr: foodItemArr ) { 
    this.FoodItemArr=FoodItemArr;
  }
}
