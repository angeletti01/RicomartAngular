import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Customer } from 'src/app/model/customer';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
public customer!: Customer[];
public imageUrl:string = "https://cdn-icons-png.flaticon.com/512/5314/5314649.png";
constructor(private userService:UserService){}

ngOnInit(){
  this.getCustomers();
}

public getCustomers():void{
  this.userService.findAllCustomers().subscribe(
(response: Customer[])=>{
  this.customer = response;
},
(error: HttpErrorResponse)=>{
  alert(error.message);
  console.log(error.message);
}
  )
}

}
