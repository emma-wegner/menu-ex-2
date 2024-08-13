import { Component, numberAttribute } from '@angular/core';
import { switchMap } from 'rxjs';
import { foodItem } from '../foodItem';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public labels = ['Dosa', 'Paneer', 'Masala', 'Noodles', 'Fried Rice'];
    
    public foods: foodItem []=
    [
      new foodItem("Dosa"),
      new foodItem("Paneer"),
      new foodItem("Masala"),
      new foodItem("Noodles"),
      new foodItem("Fried Rice")
    ];

    getFd(s: string) {
        for(let i=0;i<this.foods.length;i++){
          if (this.foods[i].getName()==s)
          {
            return i;
          }
        }
        return -1;
      }
      mostThree(){
        let ordLst: foodItem []=this.foods;
        for(let i=1; i<ordLst.length;i++)
        {
          let j=i-1;
          while (ordLst[i].getCount()>ordLst[j].getCount())
          {
            j--;
          }
          this.swap(ordLst[i],ordLst[j+1])
        }
        return ordLst;
      }
  
      swap(a:foodItem, b:foodItem){
        let x=a.getName();
        let y=a.getCount();
        a.setName(b.getName());
        a.setCount(b.getCount());
        b.setName(x);
        b.setCount(y);
      }
  constructor() {   
  }
}
