import { Component, OnInit } from '@angular/core'
import { FavouriteProductService } from '../services/favourite-product.service'

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favourtieProductList: any[] | undefined

  constructor(private favouriteProductService: FavouriteProductService) {}

  async ngOnInit() {
    await this.getAllFavouriteProducts()
  }

  async getAllFavouriteProducts() {
    try {
      const localId = localStorage.getItem('userId')
      const response = await this.favouriteProductService
        .getFavouritesProductByUserId(localId)
        .toPromise()

      this.favourtieProductList = response
      if (
        this.favourtieProductList == undefined ||
        this.favourtieProductList.length == 0
      ) {
        alert('No favourite products found.')
      }
    } catch (error) {
      console.error('failed:', error)
    }
  }

  async removeFavoutite(id: any) {
    await this.favouriteProductService.removeFavouriteProduct(id).toPromise()
    this.ngOnInit()
  }
}
