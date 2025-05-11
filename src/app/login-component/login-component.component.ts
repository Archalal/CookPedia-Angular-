import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  

  loginform:FormGroup

  constructor(private api:ApiService, private fb:FormBuilder,private routes:Router){
    this.loginform=this.fb.group({

      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]

    })
  }
  login(){
   if( this.loginform.valid){
    const email=this.loginform.value.email
    const password=this.loginform.value.password
    this.api.login({email,password}).subscribe({
      next:(res:any)=>{
        sessionStorage.setItem("token",res.token)
       sessionStorage.setItem("user",JSON.stringify(res.user))
      
      
        
        
         this.loginform.reset()
         if(res.user.userType=="user"){
          this.routes.navigateByUrl('/')
         }
         else{
          //admin
         }



      },
      error:(reason:any)=>{
        alert(reason.err)
       
      }
    })

   }else{
    alert("invalid form")
   }
  }



}
