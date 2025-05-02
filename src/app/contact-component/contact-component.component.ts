import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-component',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent {


  testimonyForm:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService){
    this.testimonyForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      email:['',[ Validators.required ,Validators.email]],
      message:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]]
    })
  }
  onSubmit(){
   if(this.testimonyForm.valid){
        const name=this.testimonyForm.value.name
        const email=this.testimonyForm.value.email
        const message=this.testimonyForm.value.message

       try{
        this.api.addTestimony({name,email,message}).subscribe((res:any)=>{
          alert("thank you for your feedback")
          this.testimonyForm.reset()
        })
       

       }catch(err){
        console.error(err);
        
       }
    

   }else{
    alert("invalid")
   }
  }

}
