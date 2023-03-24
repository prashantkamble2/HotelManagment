import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signInForm: any;
  userApiData: any;

  constructor(private dataServe: DataService, private fb: FormBuilder, private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.formValidation()
  }
  formValidation() {

    this.signInForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(20)]],
      userPassword: ['', [Validators.required, Validators.maxLength(20)]]
    })
  }
  submit() {
this.dataServe.getUserApiCall().subscribe((data)=>{
  this.userApiData = data;
  console.log("userApiData-->>",data);

  let validUser = this.userApiData.find((ele:any)=>{
    return this.signInForm.value.userName == ele.userName && this.signInForm.value.userPassword == ele.userPassword;
  } )
  if(validUser){
    alert("User login succsesfully");
    this.signInForm.reset();
    this.router.navigateByUrl('/user/usersucces');
   }
   else{
    alert("User not found");
    this.signInForm.reset();
    this.router.navigateByUrl('/user/signin')
   }
  
});

  }





}


