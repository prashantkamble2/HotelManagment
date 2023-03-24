import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel_Management';
  image = '/assets/pic/Main_Hotel.jpg'

  constructor(private router: Router) { }

  journy(journy: string) {

    if (journy == 'admin') {
      this.router.navigateByUrl('/admin')
    }
    else if (journy == 'user') {
      this.router.navigateByUrl('/user/userlanding')
    }
    else if (journy == 'owner')
      this.router.navigateByUrl('/owner')

    else this.router.navigateByUrl('/home')


  }
}
