import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private route:Router, private api:ApiService){}

  isSideBaropen:boolean=true

  dashboarClass:string="col-10 m-0 p-0"
  userNumber:number=0
  userArray:any=[]
  recipieNumber:number=0
  recipieArray:any=[]
  
  
  ngOnInit(){
    this.getUsers()
    this.getRecipie()
  }



  onMenuClick(){
    this.isSideBaropen=!this.isSideBaropen
    this.isSideBaropen?this.dashboarClass="col-10":this.dashboarClass="col"
  }
  logout(){
    sessionStorage.clear()
    this.route.navigateByUrl('/')
  }
  getUsers(){
    this.api.getAllUser().subscribe((res)=>{
      console.log(res);
      
    this.userArray=res
    this.userNumber=this.userArray.length
    console.log(this.userNumber);
    
  
   
      

    })
  }
    getRecipie(){
    this.api.getAllRecipie().subscribe((res)=>{
     
      
    this.recipieArray=res

    
    this.recipieNumber=this.recipieArray.length
 
   
      

    })
  }
  
}
