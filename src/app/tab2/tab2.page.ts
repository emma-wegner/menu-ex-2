import { FoodItemArr } from "../foodItemArr";
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      this.labels = this.FoodItemArr.mostThree();
      event.target.complete();
    }, 2000);
  }
  
  async ngOnInit() {
    await this.FoodItemArr.loadSaved();
  }

  public FoodItemArr: FoodItemArr ;
  public labels: string[] = [];

  constructor(private foodItemArr: FoodItemArr) { 
    this.FoodItemArr=foodItemArr;
    this.labels = this.FoodItemArr.mostThree();
    
  }

}
