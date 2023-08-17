import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RegistrationService } from '../services/registration.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
  ) {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.minLength(3)],
      email: ['', Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}')],
      message: ['', Validators.minLength(20)],
    })
  }

  ngOnInit(): void {}

  async onSubmit() {
    const localId = localStorage.getItem('userId')

    this.registrationService
      .contactUs(this.contactUsForm.value, localId)
      .subscribe({
        next: (response) => {
          alert('Successfully send response')
          this.resetTheForm()
        },
        error: (error) => {
          alert('You have already submitted response.')
          this.resetTheForm()
        },
      })
  }

  resetTheForm(): void {
    this.contactUsForm.reset()
  }
}
