import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['data1','data2'])
  goal = this.goals.asObservable();
  
  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
  
}