import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() set todo(todo:ITodo){
    this._todo = todo;
  };

  public get todo(){
    return this._todo;
  }

  private _todo:ITodo;

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {

  }

  public onCompletedClick(todo: ITodo): void {
    todo.isCompleted=true;
  }

  public onArchivedClick(todo: ITodo): void {
    todo.isArchived=true;
    this._todoService.setSelectedTodo(todo);
  }


}
