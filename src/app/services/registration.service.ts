import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  registerUser(signUpData: any) {
    return this.http.post(this.apiUrl + '/api/registration/add', signUpData)
  }

  getLoginByEmail(email: any): Observable<any[]> {
    return this.http.get<any[]>(
      this.apiUrl + '/api/registration/login' + `/${email}`,
    )
  }

  getLoginUserInfo(userId: any): Observable<any[]> {
    return this.http.get<any[]>(
      this.apiUrl + '/api/registration/getLoginUserInfo' + `/${userId}`,
    )
  }

  editUser(editUserData: any, id: any) {
    return this.http.put(
      this.apiUrl + '/api/registration/edit' + `/${id}`,
      editUserData,
    )
  }

  contactUs(data: any, id: any) {
    return this.http.post(this.apiUrl + '/api/contactUs/' + `${id}`, data)
  }
}
