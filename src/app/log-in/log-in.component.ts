import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RegistrationService } from '../services/registration.service'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  public matchUserData: any
  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private route: Router,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}')],
      password: ['', Validators.minLength(6)],
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.registrationService
        .getLoginByEmail(this.loginForm.value.email)
        .subscribe({
          next: (response) => {
            this.matchUserData = response
            if (this.matchUserData.password != this.loginForm.value.password) {
              alert('Incorrect password')
            } else {
              this.authService.setLoginUser(this.matchUserData._id)
              this.authService.login()
              this.route.navigate(['/homePage', this.matchUserData._id])
            }
          },
          error: (error) => {
            alert('Error: ' + error.error.message)
          },
        })
    }
  }
}
