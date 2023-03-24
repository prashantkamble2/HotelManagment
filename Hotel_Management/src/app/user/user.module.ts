import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UsersuccesComponent } from './usersucces/usersucces.component';


@NgModule({
  declarations: [
    UserComponent,
    UserlandingComponent,
    UsersuccesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
