import { foodItemArr } from "../foodItemArr";
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public FoodItemArr: foodItemArr ;
  public labels: string[] = [];

  refresh(){
    this.labels = this.FoodItemArr.mostThree();
  }
  constructor(FoodItemArr: foodItemArr ) { 
    this.FoodItemArr=FoodItemArr;
    
  }

}
