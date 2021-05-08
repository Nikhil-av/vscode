import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  status:boolean=true;
  k:number=1;
  ind:number=0;
  users=[];

  changeS(){
    this.ind=this.ind+1;
  }
  deleteItem(index){
    this.users.splice(index,1)
}
  addUserData(ref:NgForm){

    let userObj=ref.value;
    
    //push into users array
    this.users.push(userObj)

    //clear form flields

    ref.reset();
  }
}