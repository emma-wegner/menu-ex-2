
export class foodItem {
    name: string;
    count=0; 
      constructor(name:string) {
        this.name = name;
      }
      getName(){
        return this.name;
      }

      addCount(){
        this.count++;
        console.log(this.count);
      }
      getCount(){
        return this.count;
      }

      setName(x:string){
        this.name=x;
      }

      setCount(y:number){
        this.count=y;
      }

  }
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class foodItemArr {
     
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
        //loops and organzises
        for(let i=1; i<ordLst.length;i++)
        {
          let a: foodItem;
           a=ordLst[i];
          let j=i-1;
          while (j>=0 && a.getCount()>ordLst[j].getCount())
          {
            ordLst[j+1]=ordLst[j];
            j--;
          }
          ordLst[j+1]=a;
        }

        //turn into array of string
        let strs: string[] = [];
        for(let i=0; i<ordLst.length;i++)
        {
          let j=i+1;
          strs.push(j+" "+ordLst[i].getName())
        }
        //returns strs
        return strs;
      }
  
      
      constructor() { }
  }
