import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService,private router : Router) { }
  
  submitted = false;

  registerForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',Validators.required)
  })
  msg : string =null;
  errmsg : String = null;
  loading = false;

  user = {
		email: '',
		password: ''
	}
  ngOnInit() {
  }

  login(detail) {
    this.loginService.authorize(detail).subscribe((res:any) =>{
      console.log("DATA:",res)
      this.loading = true;
      localStorage.setItem('users',res.data.email);
      localStorage.setItem('token',res.token);
      this.msg = 'Login Succesfully';
      this.router.navigate['/dashboard'];
    },err =>{
      console.log("ERROR:",err);
      this.errmsg = 'Incorrect Info!';
      this.loading = false;
    })
  }

}
