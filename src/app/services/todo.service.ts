import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: ITodo[] = [];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    const todosString = localStorage.getItem('todos');
    if (!this._todoSubject.value.length) {
      if (todosString) {
        const existingTodo: Array<ITodo> = JSON.parse(todosString); 0
        existingTodo[0].selected = true;
        this._todoSubject.next(existingTodo);
        this._singleTodoSubject.next(existingTodo[0]);
      }
    }
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    return this._singleTodoSubject.next(todo);
  }

  public addNewTodo(newTodo: ITodo) {
    const existingTodo: Array<ITodo> = this._todoSubject.value;
    existingTodo.push(newTodo);
    this._todoSubject.next(existingTodo);
    localStorage.setItem('todos', JSON.stringify(existingTodo));
  }

  public onActionTodo(todoId: string,action:string): void {
    const existingTodo: Array<ITodo> = this._todoSubject.value;
    const todoIndex = existingTodo.findIndex(index => index.id === todoId);
    existingTodo[todoIndex][action] = true;
    this._todoSubject.next(existingTodo);
    localStorage.setItem('todos', JSON.stringify(existingTodo));
  }

}
