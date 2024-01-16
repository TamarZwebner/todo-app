import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      id: 1,
      title: "Cacatua tenuirostris",
      description: "Cockatoo, long-billed",
      isCompleted: false,
      isArchived: false,
      endDate: "12/3/2023",
      selected: true
    },
    {
      id: 2,
      title: "Phalacrocorax niger",
      description: "Little cormorant",
      isCompleted: false,
      isArchived: false,
      endDate: "10/9/2023",
      selected: false
    },
    {
      id: 3,
      title: "Funambulus pennati",
      description: "Squirrel, palm",
      isCompleted: false,
      isArchived: false,
      endDate: "12/18/2023",
      selected: false
    },
    {
      id: 4,
      title: "Hymenolaimus malacorhynchus",
      description: "Duck, mountain",
      isCompleted: false,
      isArchived: false,
      endDate: "12/22/2023",
      selected: false
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    return this._singleTodoSubject.next(todo);
  }



}
