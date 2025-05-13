import { Component,Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { recipieModel } from './recipiemodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipieedit',
  standalone: false,
  templateUrl: './recipieedit.component.html',
  styleUrl: './recipieedit.component.css',
})
export class RecipieeditComponent {
  @Input() id!:string
  constructor(private api: ApiService, private routes:Router) {}
  recipesArray: any = [];
  cuisineArray: any = [];
  dummyArray: any = [];
  flatDummyArray: any = [];
  mealArray: any = [];
  keydummyArray: any = [];

  newRecipieArray: recipieModel = {};
  ingredients: any = [];
  instruction:any=[]
  mealTypeArray:any=[]

  ngOnInit() {
    this.getAllRecipe();
    console.log(this.id);
    
  }

  getAllRecipe() {
    this.api.getAllRecipie().subscribe((res) => {
      this.recipesArray = res;
      if(this.id){
        this.newRecipieArray=this.recipesArray.find((eachRecipie:any)=>eachRecipie._id==this.id)
        this.ingredients=this.newRecipieArray.ingredients,
        this.instruction=this.newRecipieArray.instructions,
        this.mealTypeArray=this.newRecipieArray.mealType
      }
      
      this.keydummyArray = res;
      console.log(this.recipesArray);

      this.recipesArray.forEach((item: any) => {
        !this.cuisineArray.includes(item.cuisine) &&
          this.cuisineArray.push(item.cuisine);
        console.log(this.cuisineArray);
      });

      this.dummyArray = this.recipesArray.map(
        (eachRecipe: any) => eachRecipe.mealType
      );

      this.flatDummyArray = this.dummyArray.flat(Infinity);

      this.flatDummyArray.forEach(
        (a: any) => !this.mealArray.includes(a) && this.mealArray.push(a)
      );
      console.log(this.mealArray);
    });
  }

  addIngredients(input: any) {
    if (input.value) {
      this.ingredients.push(input.value);
      console.log(this.ingredients);
    }
  }
  removeIngredient(item: any) {
    this.ingredients = this.ingredients.filter(
      (ingre: string) => ingre != item
    );
  }
  addInstruction(input: any) {
    if (input.value) {
      this.instruction.push(input.value);
      console.log(this.instruction);
    }
  }
  removeInstruction(item: any) {
    this.instruction = this.instruction.filter(
      (instr: string) => instr != item
    );
  }

  mealTypeCheck(event:any){
    if(event.target.checked){
      this.mealTypeArray.push(event.target.name)
    }
    else{
      this.mealTypeArray=this.mealTypeArray.filter((eachItem:any)=>eachItem!=event.target.name)
    }
    console.log(this.mealTypeArray);
  }
  
  addRecipie()
  {
    
    this.newRecipieArray.instructions=this.instruction
    this.newRecipieArray.ingredients=this.ingredients
    this.newRecipieArray.mealType=this.mealTypeArray
    console.log(this.newRecipieArray);
    const{
       name ,
    ingredients,
    instructions ,
    prepTimeMinutes,
    cookTimeMinutes,
    servings ,
    difficulty,
    cuisine ,
    caloriesPerServing ,
    image ,
    mealType ,
    }=this.newRecipieArray
    if(name&& ingredients&& instructions&& prepTimeMinutes&&cookTimeMinutes&&servings&&difficulty&&cuisine&&caloriesPerServing&&image&&mealType){
      this.api.addRecipieAPI(this.newRecipieArray).subscribe(
        {
          next:(res)=>{
            alert("successully added")
            this.routes.navigateByUrl('/admin/recipelist')
          },
          error:(resaon)=>{
            alert(resaon.error)
          }
        }
      )

    }else{
      alert("fill the form")
    }
    
    
    
    
  }

  removeMealItem(meal:string){
    this.mealTypeArray=this.mealTypeArray.filter((item:string)=>item!=meal)
  }
  
  updateRecipie(){
    this.newRecipieArray.instructions=this.instruction
    this.newRecipieArray.ingredients=this.ingredients
    this.newRecipieArray.mealType=this.mealTypeArray
    console.log(this.newRecipieArray);
    const{
       name ,
    ingredients,
    instructions ,
    prepTimeMinutes,
    cookTimeMinutes,
    servings ,
    difficulty,
    cuisine ,
    caloriesPerServing ,
    image ,
    mealType ,
    }=this.newRecipieArray
    if(name&& ingredients&& instructions&& prepTimeMinutes&&cookTimeMinutes&&servings&&difficulty&&cuisine&&caloriesPerServing&&image&&mealType){
      this.api.updateRecipie(this.id,this.newRecipieArray).subscribe(
        {
          next:(res)=>{
            alert("successully added")
            this.routes.navigateByUrl('/admin/recipelist')
          },
          error:(resaon)=>{
            alert(resaon.error)
          }
        }
      )

    }else{
      alert("fill the form")
    }

  }


}
