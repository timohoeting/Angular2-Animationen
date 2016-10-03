import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Router } from '@angular/router';
import { Task } from '../../objects/task/task'
import { TASKS } from '../../objects/task/mock-tasks';

@Component({
  selector: 'welcome',
  templateUrl: 'app/components/enterleave/enterleave.component.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.8s 100ms')
      ]),
      transition('* => void', [
        animate('0.3s 100ms', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class EnterLeaveComponent implements OnInit{

    tasklist : Task[] = [];
    newTask : string = "";

    constructor(private _router: Router){}

    ngOnInit(){
        this.tasklist = TASKS;
    }

    add(){
        this.tasklist.push({id: this.tasklist.length, name: this.newTask, done: false})
        this.newTask = "";
    }

    remove(){
      this.tasklist.pop();
    }
}
