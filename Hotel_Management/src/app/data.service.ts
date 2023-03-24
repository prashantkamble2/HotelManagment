import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 // url='http://localhost:3000'
 userurl: string = "http://localhost:3000/users";
  

  constructor(private http:HttpClient) { }

  postUserApiCall(data: any) {
    return this.http.post(this.userurl, data);
  }
  getUserApiCall(){

    return this.http.get(this.userurl);
  }

}
