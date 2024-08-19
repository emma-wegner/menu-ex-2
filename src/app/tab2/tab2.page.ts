import { FoodItemArr } from "../foodItemArr";
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  async ngOnInit() {
    await this.FoodItemArr.loadSaved();
  }

  public FoodItemArr: FoodItemArr ;
  public labels: string[] = [];

  refresh(){
    this.labels = this.FoodItemArr.mostThree();
  }
  constructor(private foodItemArr: FoodItemArr) { 
    this.FoodItemArr=foodItemArr;
    
  }

}
