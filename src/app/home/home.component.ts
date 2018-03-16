import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4
  btnText: string = "Add new Item"
  goalText: string = 'My first life goal';    // Add this

  // กำหนดตัวแปรไว้เก็บข้อมูลจากการ submit
  goals = [];

  constructor(private _data:DataService) { }

  ngOnInit() {
    // นับจำนวนรายการใน list
    this.itemCount = this.goals.length; // length เป็นคำสั่งนับ
    this._data.goal.subscribe(res => this.goals = res)
    this._data.changeGoal(this.goals);
  }

  addItem() {
    // ตรวจค่าว่าง
    if (this.goalText != "") {
      // ตรวจว่ามีข้อมูลอยู่ใน array หรือยัง
      if (this.goals.indexOf(this.goalText) !== -1) {
        alert("มีข้อมูลแล้ว")
      } else {
        this.goals.push(this.goalText);
        this.goalText = '';
        this.itemCount = this.goals.length; // length เป็นคำสั่งนับ
        this._data.changeGoal(this.goals);
      }
    }else{
      alert("กรอกข้อมูลก่อน")
    }
  }

}
