import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipie-component',
  imports: [CommonModule,NgxPaginationModule,SearchPipe,FormsModule],
  templateUrl: './recipie-component.component.html',
  styleUrl: './recipie-component.component.css'
})
export class RecipieComponentComponent {

  recipesArray:any=[]
  cuisineArray:any=[]
  dummyArray:any=[]
  flatDummyArray:any=[]
  mealArray:any=[]
  keydummyArray:any=[]
  p: string|number|undefined;
   searchKey: string="";

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllRecipe()
  }


  getAllRecipe(){
    
    this.api.getAllRecipie().subscribe((res)=>{
      this.recipesArray=res
      this.keydummyArray=res
      console.log(this.recipesArray);

      this.recipesArray.forEach((item:any) => {
       !this.cuisineArray.includes(item.cuisine)&& this.cuisineArray.push(item.cuisine)
        console.log(this.cuisineArray);

       
        
        
      });


      this.dummyArray=this.recipesArray.map((eachRecipe:any)=>
        eachRecipe.mealType)

         this.flatDummyArray=this.dummyArray.flat(Infinity)

         this.flatDummyArray.forEach((a:any)=>
        !this.mealArray.includes(a) &&this.mealArray.push(a)
        
        )
        console.log(this.mealArray);
        
      
      
   
      
      

      
    })
  }


  filterRecipes(key:string,value:string){

    this.recipesArray=this.keydummyArray.filter((recipie:any)=>
    recipie[key].includes(value))

  }

 
}
