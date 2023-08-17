import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getAllSampleProducts(): Observable<any[]> {
    return this.http.get<any[]>(
      this.apiUrl + '/api/sampleProducts/getAllSampleProducts',
    )
  }

  getProductDetailByProdcuctId(id: any): Observable<any[]> {
    return this.http.get<any[]>(
      this.apiUrl + '/api/sampleProducts/getProductDetailById' + `/${id}`,
    )
  }
}
