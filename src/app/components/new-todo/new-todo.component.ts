import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  minDate: Date = new Date();

  constructor(private _todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onNewTodoSubmit(): void {
    if (this.form.valid) {
      const newTodo: ITodo = {
        id: uuidv4(),
        title: this.form.form.value.title,
        description: this.form.form.value.description,
        isCompleted: false,
        isArchived: false,
        endDate: this.form.form.value.endDate,
        selected: false
      }
      this._todoService.addNewTodo(newTodo);
      this.dialog.closeAll();
    }
  }

}
