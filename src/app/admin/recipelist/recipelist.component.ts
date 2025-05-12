import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recipelist',
  standalone: false,
  templateUrl: './recipelist.component.html',
  styleUrl: './recipelist.component.css'
})
export class RecipelistComponent {
  recipieArray:any=[]
  searchKey:string=""

  constructor(private api:ApiService){}
  ngOnInit(){
    this.getRecipe()
  }

  getRecipe(){
    this.api.getAllRecipie().subscribe((res)=>{
      this.recipieArray=res


    })
  }
  deleteRecipie(id:string){
    this.api.deleteRecipie(id).subscribe((res)=>{
      alert("succesfully deleteed")
      this.getRecipe()
    })
  }

}
