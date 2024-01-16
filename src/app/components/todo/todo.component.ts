import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todo: ITodo;

  private subscriptions: Subscription = new Subscription;

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this._todoService.getSelectedTodo().subscribe(data=>{
        this.todo = data;
      })
    )
  }

  public onCompletedClick(todo: ITodo): void {
    todo.isCompleted=true;
  }

  public onArchivedClick(todo: ITodo): void {
    todo.isArchived=true;
    this._todoService.setSelectedTodo(todo);
  }


  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

}
