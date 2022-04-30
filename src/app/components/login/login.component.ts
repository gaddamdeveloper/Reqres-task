import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }
  loginForm: FormGroup;
  errorMessage:boolean=false;
  ngOnInit(): void {
    this.createLoginForm()
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit() {
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['./user'])
      }, (error) => {
        this.errorMessage=true;
      }
    )
  }
}
