import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipie-component',
  imports: [],
  templateUrl: './view-recipie-component.component.html',
  styleUrl: './view-recipie-component.component.css'
})
export class ViewRecipieComponentComponent {
   recipieId:string=""
   singleRecipie:any=[]
   singleRecipieObj:any={}
  constructor(private route:ActivatedRoute,private api:ApiService){}

  ngOnInit(){
    this.route.params.subscribe((res)=>{

      this.recipieId=res['id']
      console.log(this.recipieId);
      this.getOneRecipie(this.recipieId)
      

    })
  }
  getOneRecipie(recipieId:string){
    this.api.getSingleRecipie(recipieId).subscribe((res)=>{
     this.singleRecipie=res
     this.singleRecipieObj=this.singleRecipie[0]
     console.log(this.singleRecipieObj);
     
     
     
      
    })
  }

}
