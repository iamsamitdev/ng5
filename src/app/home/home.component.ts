import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number = 4
  btnText:string="Add new Item"
  goalText: string = 'My first life goal';    // Add this

  // กำหนดตัวแปรไว้เก็บข้อมูลจากการ submit
  goals = [];
  
  constructor() { }

  ngOnInit() {
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
  }

}
