import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  error: string = ''

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  /**
   * Function for login the user into the app
   */
  onSubmit(): void {
    this.auth.signIn(this.loginForm.value).then(res => {
    }).catch(err => {
      this.error = err.message
      this.loginForm.reset()
    })
  }

}
