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

  public onTodoClick(todo: ITodo, index:number): void {
      this._todoService.setSelectedTodo(todo);
      this.todos.forEach(todo => {
        if(todo.selected){
          todo.selected = false;
        }
      })
      this.todos[index].selected = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


