import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipie-component',
  imports: [CommonModule],
  templateUrl: './recipie-component.component.html',
  styleUrl: './recipie-component.component.css'
})
export class RecipieComponentComponent {

  recipesArray:any=[]

  cuisineArray:any=[]

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllRecipe()
  }


  getAllRecipe(){
    
    this.api.getAllRecipie().subscribe((res)=>{
      this.recipesArray=res
      console.log(this.recipesArray);

      this.recipesArray.forEach((item:any) => {
       !this.cuisineArray.includes(item.cuisine)&& this.cuisineArray.push(item.cuisine)
        console.log(this.cuisineArray);
        
        
      });

      

      
    })
  }

 
}
