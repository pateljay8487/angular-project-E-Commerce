import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RegistrationService } from '../services/registration.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private route: Router,
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
        ],
      ],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['', Validators.minLength(6)],
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.valid) {
      if (
        this.registrationForm.value.password !==
        this.registrationForm.value.confirmPassword
      ) {
        alert('Password not matched')
        return
      } else {
        this.registrationService
          .registerUser(this.registrationForm.value)
          .subscribe({
            next: (response) => {},
            error: (error) => {
              console.error('Registration failed:', error)
            },
          })
        this.resetTheForm()
        alert('Registration successful, Sign in to continue...')
        this.route.navigate([''])
      }
    }
  }

  resetTheForm(): void {
    this.registrationForm.reset()
  }
}
