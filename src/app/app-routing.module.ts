import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component'
import { LogoffComponent } from './logoff/logoff.component';
import { RouteGuardService } from './service/route-guard.service';
import { ListTodosComponent } from './list-todos/list-todos.component'


//welcome

const routes: Routes = [
  { path:'login',
    component: LoginComponent
  },
  {
    path:'welcome/:name',
    component: WelcomeComponent,
    canActivate:[RouteGuardService]
  },
  {
    path:'logoff', component: LogoffComponent, canActivate:[RouteGuardService]
  },
  {
    path:'', component: LoginComponent
  },
  {
    path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]
  },
  {
    path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
