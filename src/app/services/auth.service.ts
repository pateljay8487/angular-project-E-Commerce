import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInFlag = false
  public logInUser: any

  constructor() {}

  isLoggedIn() {
    return this.isLoggedInFlag
  }

  login() {
    this.isLoggedInFlag = true
  }

  logout() {
    this.isLoggedInFlag = false
  }

  setLoginUser(id: any) {
    localStorage.setItem('userId', id)
  }
}
