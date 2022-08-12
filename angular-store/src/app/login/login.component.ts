import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DashbaordComponent } from '../dashbaord/dashbaord.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg?:string;
  password ?:string;
  isEnable:boolean =false;
  accountLock:boolean =true;

  counter:number = 0;
  public contacts: Array<any> = [
    {  userName: "admin", pass: "123" },
    {  userName: "emp", pass: "123" },
    {  userName: "user", pass: "123" }
  ]


  constructor(public router:Router) { }
 
  ngOnInit(): void {
  }
  login(loginInfo:any){
    console.log(loginInfo)
  if(this.counter === 3)
  {
    this.accountLock = false;
    this.msg = "Your account is locked!";

  }
  else
  {
    console.log("Else")
      for (let index = 0; index < this.contacts.length; index++) {
        if(loginInfo.username=== this.contacts[index].userName &&
           loginInfo.password=== this.contacts[index].pass){
          this.isEnable = true;          
          break;
      }
      }
   
      if(this.isEnable){
        console.log("welcome")
        sessionStorage.setItem("token",loginInfo.username);
        console.log(loginInfo.username)
        this.router.navigate(["/dashboard"]);
      }else {
       
        this.msg = "Invalid user name or password. try: " + ++this.counter + " Please try again.";
      }
      }



  }
  onLock(){
    this.msg = " ";
    this.counter = 0;
    this.accountLock = true;
  }
}
