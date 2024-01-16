import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      title: "Cacatua tenuirostris",
      description: "Cockatoo, long-billed",
      isCompleted: true,
      isArchived: false,
      endDate: "12/3/2023"
    },
    {
      title: "Phalacrocorax niger",
      description: "Little cormorant",
      isCompleted: true,
      isArchived: true,
      endDate: "10/9/2023"
    },
    {
      title: "Funambulus pennati",
      description: "Squirrel, palm",
      isCompleted: true,
      isArchived: true,
      endDate: "12/18/2023"
    },
    {
      title: "Hymenolaimus malacorhynchus",
      description: "Duck, mountain",
      isCompleted: true,
      isArchived: false,
      endDate: "12/22/2023"
    },
  ];

  private _todoSubject:BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
}
