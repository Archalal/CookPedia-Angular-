import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private routes:Router){}
  name:string=""
  isloggined:boolean=false

 ngOnInit(){

  if(sessionStorage.getItem("token")){
    this.isloggined=true
    const item=JSON.parse(sessionStorage.getItem("user")||"")
    this.name=item.username 
    

   }

  }
  logout(){
    sessionStorage.clear()
    this.routes.navigateByUrl('/').then(() => {
    window.location.reload(); 
  });

  }
 
}
