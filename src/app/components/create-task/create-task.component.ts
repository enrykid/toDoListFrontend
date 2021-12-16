import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Task} from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;
  tittle = 'Crear Tarea'
  id : string | null;
  constructor(private fb: FormBuilder,
               private router: Router,
               private toastr: ToastrService,
               private _taskService: TaskService,
               private aRouter: ActivatedRoute) { 
    this.taskForm = this.fb.group({
    task:['', Validators.required],
    responsable:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isToEdit();
  }
  
  addTask(){
    const TASK: Task = {
      description: this.taskForm.get('task')?.value,
      responsable: this.taskForm.get('responsable')?.value,
    }

    if (this.id !== null) {
      //edit task
this._taskService.editTask(this.id, TASK).subscribe(data=>{
  this.toastr.info('La tarea fue actualizada con exito', 'Tarea actualizada!');
  this.router.navigate (['/'])
},error =>{
  console.log(error);
  this.taskForm.reset();
})

    }else{
      //add Task
      this._taskService.saveTask(TASK).subscribe(data=>{
        this.toastr.success('La tarea fue registrada con exito', 'Tarea regisrtada!');
        this.router.navigate (['/'])
      }, error =>{
        console.log(error);
        this.taskForm.reset();
      })
    }
  }
  
  isToEdit(){
    if (this.id !== null) {
      this.tittle = 'Editar Tarea'
      this._taskService.getInfoTask(this.id).subscribe(data=>{
        this.taskForm.setValue({
          task : data.description,
          responsable : data.responsable,
        })
      })
    }
  }
}
