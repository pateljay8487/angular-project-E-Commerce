import { Component, OnInit } from '@angular/core'
import { RegistrationService } from '../services/registration.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  loginUserDetail: any
  isEditMode: boolean = true
  editUserForm: FormGroup

  constructor(
    private registerService: RegistrationService,
    private fb: FormBuilder,
  ) {
    this.editUserForm = this.fb.group({
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}')],
      userName: ['', Validators.minLength(6)],
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.pattern(/^[0-9]*$/)],
    })
  }

  async ngOnInit() {
    const localId = localStorage.getItem('userId')
    const response = await this.registerService
      .getLoginUserInfo(localId)
      .toPromise()
    this.loginUserDetail = response
  }

  editUser() {
    this.isEditMode = false
    this.editUserForm.patchValue({
      email: this.loginUserDetail.email,
      firstName: this.loginUserDetail.firstName,
      lastName: this.loginUserDetail.lastName,
      gender: this.loginUserDetail.gender,
      phoneNumber: this.loginUserDetail.phoneNumber,
      userName: this.loginUserDetail.userName,
    })
  }

  cancel() {
    this.isEditMode = true
  }

  async onSubmit() {
    const localId = localStorage.getItem('userId')

    if (this.editUserForm.valid) {
      await this.registerService
        .editUser(this.editUserForm.value, localId)
        .subscribe({
          next: (response) => {},
          error: (error) => {
            console.error('update failed:', error)
          },
        })
    }
    await this.ngOnInit()
    this.isEditMode = true
  }
}
