import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  constructor(private _todoService: TodoService) { }

  private subscription: Subscription = new Subscription();

  public todos: Array<ITodo> = [];

  ngOnInit(): void {
    this.subscription.add(
      this._todoService.getTodos().subscribe(data => {
        this.todos = data;
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


