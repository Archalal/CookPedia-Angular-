import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-userlist',
  standalone: false,
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

  userList:any=[]

  constructor(private api:ApiService){}

  getUsers(){
    this.api.getAllUser().subscribe((res)=>(
      this.userList=res
    ))
  }

}
