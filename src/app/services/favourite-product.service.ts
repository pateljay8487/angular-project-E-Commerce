import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class FavouriteProductService {
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getFavouritesProductByUserId(id: any): Observable<any[]> {
    return this.http.get<any[]>(
      this.apiUrl +
        '/api/favouriteProducts/getFavouriteProductByUserId' +
        `/${id}`,
    )
  }

  addFavouriteProduct(newProduct: any, id: any) {
    return this.http.post(
      this.apiUrl + '/api/favouriteProducts/like' + `/${id}`,
      newProduct,
    )
  }

  removeFavouriteProduct(id: any) {
    return this.http.delete(
      this.apiUrl + '/api/favouriteProducts/removeFavourite' + `/${id}`,
    )
  }
}
