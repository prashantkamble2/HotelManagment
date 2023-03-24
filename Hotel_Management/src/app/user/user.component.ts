import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
constructor( private route:Router) {}

  signin(): void{

    this.route.navigateByUrl('/signin');
  }

  signup(){
    this.route.navigateByUrl('/signup')

  }
}
