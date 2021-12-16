import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes
import {APP_ROUTING} from './app.routes';
//Services

// Components
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CreateTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
