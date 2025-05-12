import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  //append token in req header
  appendToken(){
    //create a new variable with httpheaders feature
    let headers=new HttpHeaders()
    let token=sessionStorage.getItem("token")
    if(token){
      headers=headers.append('authorization',`Bearer ${token}`)
    }
    return {headers}
  }
  getSingleRecipie(id:string){
    return this.http.get(`${this.server_url}/singlerecipe/${id}/view`,this.appendToken())
  }

  addRecipieAPI(reqBody:any){
    return this.http.post(`${this.server_url}/addrecipie`,reqBody,this.appendToken())
  }

  deleteRecipie(id:string){
    return this.http.delete(`${this.server_url}/delete/${id}/recipie`,this.appendToken())
  }
  
}

