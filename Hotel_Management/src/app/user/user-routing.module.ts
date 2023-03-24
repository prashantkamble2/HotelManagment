import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UsersuccesComponent } from './usersucces/usersucces.component';

const routes: Routes = [
  { path: 'userlanding', component: UserComponent },
{path:'usersucces',component:UsersuccesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
