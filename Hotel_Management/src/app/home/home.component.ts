import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  image = '/assets/pic/Main_Hotel.jpg'

  constructor(private router:Router){}

  journy(journy:string){

    if( journy=='admin'){
      this.router.navigateByUrl('/admin')
    }
    else if( journy=='user'){
      this.router.navigateByUrl('/user/userlanding')
    }
    else 
      this.router.navigateByUrl('/owner')
    

  }
}
