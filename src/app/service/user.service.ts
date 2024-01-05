import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpHeaderResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs'; 

import { Customer } from '../model/customer';
import { environment } from '../environments/environment';
import { tap,delay,catchError } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl:string = environment.baseUrl;
  isUserLoggedIn: boolean = false;
  responseStatus!: number;
  statusMessage!: string;
  responseCode = new HttpHeaderResponse;

  constructor(private http: HttpClient) {}

  public addCustomer(customer:Customer){
    this.http.post<Customer>(`${this.apiServerUrl}/ricomart/create-customer`, customer).subscribe((data)=>{});    
  }

  public findAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.apiServerUrl}/ricomart/get-all-customers`);
  }

  public userLogin(username:string,password:string): Observable<any>{    
  //console.log(username);
  //console.log(password);
    let body = username;
  
// this.http.post(`${this.apiServerUrl}/ricomart/login/`+`${username}`+"&"+`${password}`,body).subscribe((data)=>{}
// );

//  this.http.post(`${this.apiServerUrl}/ricomart/login/`+`${username}`+"&"+`${password}`,{observe:'response'})
//  .subscribe(response =>{console.log(response)}, 
//  error =>{console.log(error.status)}
//  );
 

// this.http.get(`${this.apiServerUrl}/ricomart/login/`+`${username}`+"&"+`${password}`,{observe:'response'})
// .subscribe(response =>{ 
//   console.log(response.status);
//   this.responseStatus = response.status;
this.http.post(`${this.apiServerUrl}/ricomart/login/`+`${username}`+"&"+`${password}`,{observe:'status'})
// .pipe(catchError(error=>{ 
  
//   return throwError(error);
// }))
.subscribe(response =>{ 
 console.log(response);
  console.log(this.responseCode.status);
   //console.log(response);
  // if(this.responseStatus == 202)
  // {
  //   this.statusMessage = "User Authentication Successfull!!!";
  //   console.log("Login Successful!!!");
  //   this.isUserLoggedIn = true;
  
  // }
  // else{
  //   this.statusMessage = "User Authentication Unsuccessfull!!!";
  //   console.log("Login Unsuccessful!!!");
  //   this.isUserLoggedIn = false;
  // }
}, 
  error =>{console.log(error.status)},
  );  

// return of(this.isUserLoggedIn).pipe(
//   delay(1000),
//   tap(val  => { 
//      console.log(`${this.statusMessage} ` + this.isUserLoggedIn); 
//   })  
// );
return of("User Credentials Authenticated: "+this.isUserLoggedIn)
} // end userLogin 


}

