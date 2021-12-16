import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';       

@Injectable({
  providedIn: 'root'
})
export class TaskService {
url= 'http://localhost:4567/api/task/'
  constructor(private http: HttpClient ) { }

  getTasks(): Observable<any>{
   return this.http.get(this.url);
  }

  deleteTask(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveTask(task: Task): Observable<any>{
    return this.http.post(this.url, task);
  }
  getInfoTask(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editTask(id: string, task : Task): Observable<any>{
    return this.http.put(this.url + id, task);
  }

}
