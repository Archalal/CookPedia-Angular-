import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getAllRecipie(){
    return this.http.get(`${this.server_url}/getallrecipe`)
  }

  addTestimony(reqBody:any){
    return  this.http.post(`${this.server_url}/addtestimony`,reqBody)
  }

  register(reqBody:any){
    return this.http.post(`${this.server_url}/register`,reqBody)
  }
  login(reqBody:any){
    return this.http.post(`${this.server_url}/login`,reqBody)
  }
  getAllUser(){
    return this.http.get(`${this.server_url}/allusers`)
  }
  
}

