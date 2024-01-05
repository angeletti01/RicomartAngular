import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public customer?: Customer;
  public username!: string; 
  public password!: string 
  public formData!: FormGroup;

  constructor(private userService:UserService, 
    private router : Router, /*private formGroup:FormGroup*/){}

ngOnInit(): void {
  this.formData = new FormGroup({
    username: new FormControl("username"),
    password: new FormControl("password"),
  });
}

validate(data:any){
  this.username = data.username;
  this.password = data.password;

  console.log("UserName: "+`${this.username}`);
  console.log("Password: "+`${this.password}`);
  this.userService.userLogin(this.username,this.password)
  .subscribe((data: string) =>{
    console.log("Validating credentials" + data);
  });
  
}

}
