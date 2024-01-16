import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
}

