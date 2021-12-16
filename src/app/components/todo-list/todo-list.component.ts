import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTasks: Task[] = [];
  constructor(private _taskService: TaskService,
                private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  
    getTasks(){
      this._taskService.getTasks().subscribe(data=>{
        console.log(data);
        this.listTasks = data;
      }, error=>{
        console.log(error);
      })
    }

    deleteTask(id: any){
      this._taskService.deleteTask(id).subscribe(data => {
      this.toastr.error('Tarea eliminada con exito', 'Tarea eliminada');
      this.getTasks();
    }, error => {
      console.log(error);
    }
    )}
}
