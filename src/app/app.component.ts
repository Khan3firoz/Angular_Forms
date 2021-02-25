import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators }from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  loginForm = new FormGroup({
    email:new FormControl("atts@gmail.com",Validators.required),
    password:new FormControl("")
  })
  onSubmit(data) {
    console.log(data)
  }
  get email() { return this.loginForm.get('email') }
  userData = {
    email:"khan3firoz@gmail.com"
  }
}
