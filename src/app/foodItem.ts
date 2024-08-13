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
