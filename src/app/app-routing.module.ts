import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
import { ViewUsersComponent } from './component/view-users/view-users.component';

const routes: Routes = [
  { path: 'add', component: AddUserComponent, pathMatch: 'full' },
  { path: 'users', component: ViewUsersComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
