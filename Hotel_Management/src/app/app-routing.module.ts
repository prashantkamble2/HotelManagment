import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: '', redirectTo:'/home',pathMatch:'full' },
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
{ path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
