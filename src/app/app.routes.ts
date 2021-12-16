import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { CreateTaskComponent} from "./components/create-task/create-task.component";
import {EditTaskComponent} from "./components/edit-task/edit-task.component";

const APP_ROUTES: Routes = [
{path: '', component: TodoListComponent},
{path: 'todo-list', component: TodoListComponent},
{path: 'create-task', component: CreateTaskComponent},
{path: 'edit-task/id', component: EditTaskComponent},
{path:'**', pathMatch: 'full', redirectTo:''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);