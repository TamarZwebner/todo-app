import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { TodoService } from 'src/app/services/todo.service';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  constructor(private _todoService: TodoService, public dialog: MatDialog) {}

  private subscription: Subscription = new Subscription();

  public todo: ITodo;
  public todos: ITodo[];
  
  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this._todoService.getTodos().subscribe(data => {
        this.todos = data;
      })
    );
    this.subscription.add(
      this._todoService.getSelectedTodo().subscribe(data=>{
        this.todo = data;
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
