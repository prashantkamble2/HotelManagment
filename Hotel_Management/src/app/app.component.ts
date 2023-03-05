import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel_Management';
  constructor(private router:Router){}

  journy(journy:string){

    if( journy=='admin'){
      this.router.navigateByUrl('/admin')
    }
    else if( journy=='user'){
      this.router.navigateByUrl('/user')
    }
    else 
      this.router.navigateByUrl('/owner')
    

  }
}
