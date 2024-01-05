import { Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Customer } from 'src/app/model/customer';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
// import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public title:string = "RicoMart | Register";

 public customer: Customer;
 public password?:any = document.getElementById('password'); 
 public password2?:any = document.getElementById('password2');
// public firstName:string = '';
// public lastName:string = '';
// public email:string = '';
// public phone:string = '';
// public address:string = '';
// public userName:string = '';
// public password:string = '';
// public password2:string = '';

constructor(private userService:UserService){
  this.customer = new Customer(0,"","","","","","","");  
}

register(){   
  
  if(this.password==this.password2){
 this.userService.addCustomer(this.customer);
 console.log(this.customer);
 alert("Registration Successful!");

  }
  else{
    alert("Passowords do not match, try again....");
    console.log(this.password);
    console.log(this.password2);
  }
}

}
