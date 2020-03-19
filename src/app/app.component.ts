import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  num : number= 10;
  isAnyButtonClicked : boolean= false;
  arrayOfDiv: number[] = [];
  clickedItem : number = -1;
  ngOnInit(){
    this.creatarray(this.num);
  }
  numberChange(event:any){
    
    this.creatarray(this.num);
  }
  creatarray(input : number){
    let tempArray =[];
    for(let i =1 ;i<=input;i++){
      tempArray.push(i);
    }
    this.arrayOfDiv = tempArray;
  }
  addClicked(input : number){
    this.clickedItem = input;
    this.isAnyButtonClicked = true;
  }
  deleteItem(input : number){
    if(this.clickedItem === input){
      this.isAnyButtonClicked = false;
    }
    let index = this.arrayOfDiv.indexOf(input);
    this.arrayOfDiv.splice(index,1);
    
  }
}
