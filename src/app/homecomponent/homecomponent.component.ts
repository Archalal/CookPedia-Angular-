import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homecomponent',
  imports: [RouterLink],
  templateUrl: './homecomponent.component.html',
  styleUrl: './homecomponent.component.css'
})
export class HomecomponentComponent implements OnInit {
  

  recipieArray:any=[]
  

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.allRecipie()
    
    
    
   }
    
  

  allRecipie(){
    this.api.getAllRecipie().subscribe((res:any)=>{
      this.recipieArray=res.slice(0,6)
      console.log(this.recipieArray);
      

    })
  }

}
