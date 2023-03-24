import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm!: FormGroup; 
  userPostApiData!: any;

  constructor(private fb: FormBuilder, private dataServe:DataService) { }

  ngOnInit() {
    this.formValidation();
  }
  formValidation() {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(30)]],
      userMobNo: ['',[Validators.required, Validators.maxLength(10)]],
      userEmail: ['', [Validators.required, Validators.email]],
      gender: ['',[Validators.required]],
      userPassword: ['',[Validators.required]],
      userCheck: ['',[Validators.requiredTrue]]
    })
  }
  postUserData(data:any) {
    console.log(data);

    this.dataServe.postUserApiCall(data).subscribe((data)=>{
      // this.userPostApiData = data;
      console.log(data);
      
    })
    

  }

}
