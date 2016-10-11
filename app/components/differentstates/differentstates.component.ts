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
  selector: 'differentstates',
  templateUrl: 'app/components/differentstates/differentstates.component.html',
  animations: [
  trigger('differentstates', [
    state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.1)'})),
    transition('inactive => active', animate('500ms ease-in')),
    transition('active => inactive', animate('300ms ease-out')),
    transition('void => inactive', [
      style({transform: 'translateX(-100%) scale(1)'}),
      animate(500)
    ]),
    transition('inactive => void', [
      animate(300, style({transform: 'translateX(100%) scale(1)'}))
    ]),
    transition('void => active', [
      style({transform: 'translateX(0) scale(0)'}),
      animate(500)
    ]),
    transition('active => void', [
      animate(200, style({transform: 'translateX(0) scale(0)'}))
    ])
  ])
]
})
export class DifferenstatesComponent implements OnInit{

    tasklist : Task[] = [];
    newTask : string = "";

    constructor(private _router: Router){}

    ngOnInit(){
        this.tasklist = TASKS;
    }

    add(){
        this.tasklist.push({id: this.tasklist.length, name: this.newTask, done: false, state: 'active'})
        this.newTask = "";
    }

    remove(){
      this.tasklist.pop();
    }
}
