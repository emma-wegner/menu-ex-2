import { Component, Input } from '@angular/core';

import { FoodItemArr } from '../foodItemArr';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  async ngOnInit() {
    await this.FoodItemArr.loadSaved();
  }
    public FoodItemArr: FoodItemArr ;
    public dosas: string[] = ["Cheese Dosa", "Egg Dosa","Karam Dosa","Masala Dosa",
    "Mysore Masala","Onion Dosa", "Paneer Dosa","Plain Dosa","Idly (3 nos)",
    "Ghee Roast","Spring Dosa","Onion Rava Dosa","Rava Dosa","Rava Masala Dosa",
"Plain Uthappam","Onion Chilli Uthappam","Cheese Uthappam","Paneer Uthappam","Mix Veg Curry Dosa Combo"
,"Paneer Curry Dosa Combo","Chicken Curry Dosa Combo","Goat Curry Dosa Combo","Shrimp Curry Dosa Combo", "Fish Curry Dosa Combo",
"Spl Idli Goat Curry Combo (4 Idlis)", "Spl Idli Paneer Curry Combo (4 Idlis)","Spl Idli Chicken Curry Combo (4 Idlis)", "Spl Idli Fish Curry Combo (4 Idlis)","Spl Idli Goat Kheema Combo (4 Idlis)","Chiili Idli","Podi Idli","Idli 65","Sambar Idli"];
    public indoCh: string[] = ['Veg Noodles','Egg Noodles','Chicken Noodles','Shrimp Noodles','Schezwan Veg Noodles','Schezwan Egg Noodles','Schezwan Chicken Noodles','Schezwan Shrimp Noodles','Veg Fried Rice','Egg Fried Rice','Chicken Fried Rice','Chicken 65 Fried Rice','Shrimp Fried Rice','Schezwan Veg Fried Rice','Schezwan Egg Fried Rice',
'Schezwan Chicken Fried Rice','Schezwan Shrimp Fried Rice'];
    public tandoori: string[]= ['Chicken Tikka','Murgh Hariyali Tikka','Murgh Malai Kebab','Tandoori Chicken 3 Pcs','Tandoori Pompano','Tandoori Platter','Paneer Tikka'];
    public vegApp: string[]= ['Andhra Paneer','Paneer 65','Chili Paneer','Pepper Paneer','Ginger Paneer','Baby Corn 65','Baby Corn Manchurian','Chili Baby Corn','Gobi 65','Chili Gobi','Gobi Manchurian','Cut Mirchi','Veg Manchurian','Gobi 555','Mysoor bonda (4 piece)'];
    public nonVegApp: string[]=['Pepper Chicken','Chicken 65','Chili Chicken','Chicken Sukka','Chicken Manchurian','Ginger Goat','Andhra Chicken','Ginger Chicken'
,'Goat 65','Goat Sukka','Pepper Goat','Fish 65','Apollo Fish','Pepper Fish','Shrimp 65','Pepper Shrimp','Ginger Shrimp','Goat Haleem','Chicken 555','Chicken Pakoda'];
    public biryani: string[]=['Chicken Dum Biryani','Boneless Chicken Dum Biryani','Egg Dum Biryani','Fish Dum Biryani','Goat Dum Biryani','Goat Kheema Biryani','Gongura Boneless Chicken Dum Biryani','Gongura Chicken Dum Biryani','Gongura Goat Biryani','Gongura Paneer Dum Biryani','Gongura Veg Dum Biryani'
,'Gongura Egg Dum Biryani','Guntur Goat Biryani','Paneer Dum Biryani','Shrimp Dum Biryani','Vegetable Dum Biryani','Vijayawada Boneless Chicken Dum Biryani','Vijayawada Chicken Dum Biryani','Vijayawada Goat Dum Biryani','Veg Kheema Dum Biryani'];
    public famBiryani: string []=['Veg Dum Biryani Family Feast Combo','Paneer Dum Biryani Family Feast Combo','Chicken Dum Biryani Family Feast Combo','Boneless Chicken Dum Biryani Family Feast Combo','Gongura Chicken Dum Biryani Family Feast Combo','Vijayawada Chicken Dum Biryani Family Feast Combo','Vijayawada Boneless Chicken Dum Biryani Family Feast Combo','Gongura Goat Dum Biryani Family Feast Combo','Goat Dum Biryani Family Feast Combo','Guntur Goat Dum Biryani Family Feast Combo','Goat Kheema Dum Biryani Family Feast Combo','Fish Dum Biryani Family Feast Combo','Shrimp Dum Biryani Family Feast Combo','Egg Dum Biryani Family Feast Combo','Veg Kheema Family Feast Combo','Gutti Vankaya Biryani','Nalli Ghosh Biryani'
    ];
    public vegCurries: string[]=['Chana Masala 15 Oz Combo','Dal Tadka 15 Oz Combo','Kadai Paneer 15 Oz Combo','Mixed Veg Korma 15 Oz Combo','Mixed Veg Curry 15 Oz Combo','Palak Dal 15 Oz Combo','Paneer Tikka Masala Curry 15 Oz Combo'
,'Veg Special Curry 15 Oz Combo','Palak Paneer 15oz Combo','Malai Kofta Combo','Shahi Paneer Combo','Palak Daal Combo','Methi Paneer 15 Oz Combo','Mix Veg Chettinadu 15 Oz Combo','Mix Veg Malabar 15Oz Combo','Mix Veg Roganjosh 15Oz Combo','Paneer Roganjosh 15Oz Combo','Chettinad Paneer 15Oz Combo','Malabar Paneer 15Oz Combo','Mix Veg Kadai 15 Oz Combo','Navratan Korma 15 Oz Combo','Channa Saag 15 Oz Combo','Paneer Vindaloo 15 Oz Combo','Mix Veg Vindaloo 15 Oz Combo','Gongura Paneer 15 Oz Combo','Gongura Mix Veg 15 Oz Combo'];
    public nonVegCurries: string[]=['Andhra Chicken Curry 15 Oz Combo','Butter Chicken Curry 15 Oz Combo','Gongura Chicken Curry 15 Oz Combo','Chicken Tikka Masala Curry 15 Oz Combo','Chicken Korma 15 Oz Combo','Palak Chicken Curry 15 Oz Combo','Goat Korma Combo 15 Oz','Palak Goat Combo 15 Oz','Goat Curry 15 Oz Combo','Gongura Goat Curry 15 Oz Combo','Mutton Roganjosh 15 Oz Combo','Goat Kheema Curry 15 Oz Combo','Methi Chicken 15 Oz Combo','Methi Goat 15 Oz Combo','Chettinadu Chicken 15 Oz Combo','Chettinadu Goat Curry 15 Oz Combo','Malabar Fish Curry 15 Oz Combo','Malabar Shrimp Curry 15 Oz Combo','Malabar Chicken Curry 15Oz Combo','Chicken Roganjosh 15 Oz Combo','Chettinadu Shrimp 15 Oz Combo','Shrimp Roganjosh 15 Oz Combo','Chicken Kadai 15 Oz Curry Combo','Goat Kadai 15 Oz Curry Combo','Shrimp Kadai 15 Oz Curry Combo','Fish Kadai 15 Oz Curry Combo','Fish Vindaloo 15 Oz Curry Combo','Chicken Vindaloo 15 Oz Curry Combo','Goat Vindaloo 15 Oz Curry Combo','Lamb Boneless Vindaloo 15 Oz Curry Combo','Lamb Boneless Korma 15 Oz Curry Combo'];
    public wrap: string[]=['Kati Rolls with Paneer Veg','Kati Rolls with Potato','Kati Rolls with Chicken','Kati Rolls with Eggs','Kati Rolls with Goat Kheema','Kati Rolls with Lamb Boti'];
    public chaat: string[]=['Pani Puri','Bhel Puri','Dahi Batata Puri','Sev Puri','Samosa Chaat','Paapdi Chaat','Dahi paapdi Chaat','Pav Bhaji','Vada Pav'];
    public pizza: string[]=['Cheese Pizza','Pav Bhaji Pizza','Paneer Tikka Pizza','Chilli Panner Pizza','Chicken Tikka Pizza','Chilli Chicken Pizza','Lamb Kheema Pizza'];
    public curry: string[]=['Andhra Chicken Curry Only 15 Oz','Chicken Tikka Masala Curry Only 15 Oz','Butter Chicken Curry Only 15 Oz','Mixed Veg Curry Only 15 Oz','Mixed Veg Korma Only 15 Oz','Palak Paneer Curry Only 15 Oz','Paneer Tikka Masala Curry Only 15 Oz','Kadai Paneer Curry Only 15 Oz','Chana Masala Curry Only 15 Oz','Dal Tadka Curry Only 15 Oz','Goat Curry Only 15 Oz','Palak Chicken Curry Only 15 Oz','Goat Korma Only 15oz','Mutton Roganjosh Curry Only 15 Oz','Palak Goat Curry Only 15 Oz','Goat Kheema Curry Only 15 Oz','Chettinad Chicken Curry 15 Oz','Chettinad Fish Curry 15 Oz',
'Malabar Fish Curry Only 15 Oz','Shahi Paneer Curry Only 15 Oz','Malai Kofta Curry Only 15 Oz','Malabar Shrimp Curry Only 15 Oz','Methi Paneer Curry Only 15 Oz','Chicken Roganjosh Curry Only 15 Oz','Malabar Chicken Curry Only 15 Oz','Kadai Chicken Curry Only 15 Oz','Kadai Goat Curry Only 15 Oz,','Kadai Mix Veg Curry Only 15 Oz','Navratan Korma Curry Only 15 Oz','Gongura Mix Veg Curry Only 15 Oz','Gongura Paneer Curry Only 15 Oz','Gongura Chicken Curry Only 15 Oz','Gongura Goat Curry Only 15 Oz','Chettinadu Paneer curry'];
    public bake: string[]=['Vegetable Curry Puff','Egg Puff','Chicken Puff','Premium Cold Pastry','Eggless Cold Pastry','Dilkush','Cookies','Dilpassand','Fruit Cake','Plum Cake','Onion Samosa','Samosa (2 Pcs)','Coconut Bun','Stuffed Mirchi Bajji(3 pieces)','Onion Medhu Bonda(4 pieces)','Egg Bonda(3 pieces)','Mysore Bonda (3 pieces)','Chicken Wings (5 pieces)','Hara Bara Kabab (5 pieces)'];
    public naan: string[]=['Plain Naan','Butter Naan','Garlic Naan','Chilli Naan','Cheese Naan','Paneer Naan','Onion Kulcha','Bullet Naan'];
    public desert: string[]=['Gulab Jamun','Rasmalai','Kulfi'];
    public bev: string[]=['Indian Chai','South Indian Coffee','Mango Lassi','Water Bottle','Soda Pet Bottle','ThumsUp','Limca','Sweet Lassi','Badam Milk','Rose Milk','Chikoo Shake','Fresh Orange Juice'];
    public extra: string[]=['Extra Biryani Rice - 15 0z.','Extra Sambar 8 oz','Extra Raita 8oz','Extra Salan 8oz','Extra Roti','Extra Pav Bread','Paratha'];
    public thalis=['Veg Thali','Non-Veg Thali'];
    public weekSp=['Jackfruit Special Briyani','Jackfruit Family Pack','Naatu Kodi Pulav','Fry piece Biriyani','Nasi Goreng Veg','Nasi Goreng Chicken','Nasi Goreng Shrimp','Nalli Ghosh Biryani','Gutti Vankaya Biryani'];
    getFdLb(l:string){
      this.FoodItemArr.countAdd(l);
    }
  constructor(private foodItemArr: FoodItemArr ) { 
    this.FoodItemArr=foodItemArr;
  }
  
}
