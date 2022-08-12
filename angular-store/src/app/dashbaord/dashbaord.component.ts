import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {
  //initial books on the list
  public books: Array<any> = [
    { id: 100 , name: "plc learning", author: "jeff Ganzo" },
    { id: 200 , name: "learn C", author: "jamie Chan" },
    { id: 300 , name: "amazon course", author: "salesforce" },
    { id: 400 , name: "cars", author: "andrew" },
    { id: 500 , name: "back to future", author: "yvonne" },
    { id: 500 , name: "zibra", author: "xavier" },
  ]
  nextItem: number = this.books.length + 1;
  newName : string = "";
  newAuthor : string ="";
  updatedName : string ="";
  updatedAuthor : string ="";
  msg : string = "";
  //enable| disable based on the user access
  fieldEnable : boolean = false;
  updateEnable : boolean = true;
  createEnable = true;
  deleteEnable = true;
 //the id goes based on the last element of most recent item + 1
  _id :number =0;

  constructor(public router:Router) {
     }

  ngOnInit(): void {
    let typeOfUser = sessionStorage.getItem("token");
    //employe can read | update | delete 
    if(typeOfUser === "emp")
    {
      this.createEnable = false;
    }
    //users can read and delete from the list
    else if (typeOfUser ==="user")
    {
      this.deleteEnable = false;
    }
    //Admin can CRUD
  
   
  }

  //Functions:
  onCreate() {
    //Check for duplicates if find a duplicate based on the book name
    // if so it will send a msg to insert a diffrent name
    let lock = false;
    for (let index = 0; index < this.books.length; index++) {
      if(this.books[index].name === this.newName )
      {
        lock = true;
        break;
      }
      
    }
    if(lock===false)
    {
      //if it is valid book      
      if(this.newName.length > 1 && this.newAuthor.length > 1)
      {
        //to intialize id :
        let tempId = this.books[this.books.length-1].id;
        //creating an obj to push to array
        let obj:any = { id: tempId , name: this.newName, author: this.newAuthor };
        this.books.push(obj);

        this.msg = "New book has been added to the list."
      }
      else{
        this.msg = "Please fill in both name of the book and author."
      }
   
    }
    else
    {
      this.msg = "No duplicate allowed."
    }
    this.newAuthor = " ";
    this.newName = " ";
  }
 
  onDelete(id: any) {
    this.msg=" "
    console.log(id)
    this.books.splice(id, 1);
  }

   //WE GETTING THE ID THAN WE ONCE THE USER INSERT INPUTS THE ADD FUNCTION WILL ADD THE INPUTS TO THE LIST
   onUpdate(id:number) {
    this.msg=" "
    this.fieldEnable = true;
    this.updateEnable = false;
    this._id = id;
  }
  // add is a helper function for modifying the list
  add()
  {
    
    this.msg=" "
    console.log(this.updatedName.length + " + " + this.updatedAuthor.length)
      if(this.updatedName.length > 1 && this.updatedAuthor.length > 1)
      {
 
        this.books[this._id].id =  this.books[this._id].id ;
        this.books[this._id].name = this.updatedName ;
        this.books[this._id].author =  this.updatedAuthor;
      }
      else if(this.updatedName.length > 1)
      {
     
        this.books[this._id].id =  this.books[this._id].id ;
        this.books[this._id].name = this.updatedName ;
        this.books[this._id].author =  this.books[this._id].author;
      }
      else if(this.updatedAuthor.length > 1)
      {
        
       this.books[this._id].id =  this.books[this._id].id ;
       this.books[this._id].name =  this.books[this._id].name;
        this.books[this._id].author =  this.updatedAuthor;
      }
      else
      {
        this.msg = "New book has Not been added to the list."
      }
    this.updatedAuthor= " ";
    this.updatedName = " ";
    this.fieldEnable = false;
    this.updateEnable = true;
    
  }

  //sort functions 
  sortByAuthor(){
    this.msg=" "
    let newArr = this.books;
    newArr.sort(this.comparebyAuthor)
    this.books = newArr;
  }
  sortByname()
  {
    this.msg=" "
  this.books.sort(this.comparebyNames)
    console.log(this.books);
  }
  comparebyNames( a:any, b:any ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  comparebyAuthor( a:any, b:any ) {
    if ( a.author < b.author ){
      return -1;
    }
    if ( a.author > b.author ){
      return 1;
    }
    return 0;
  }

  logOut()
  {
    sessionStorage.removeItem("token");
    this.router.navigate(["/home"]);
  }
}
