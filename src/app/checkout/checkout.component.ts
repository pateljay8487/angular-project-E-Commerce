import { Component, OnInit } from '@angular/core'
import { FavouriteProductService } from '../services/favourite-product.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  productList: any[] | undefined
  totalPrice: number | undefined
  taxTotal: number | undefined
  roundTaxTotal: number | undefined
  shippingCharge: number = 11.31
  grandTotal: number | undefined
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

      this.productList = response
      if (this.productList != undefined) {
        this.totalPrice = this.productList.reduce(
          (sum, product) => sum + product.price,
          0,
        )
        if (this.totalPrice != undefined) {
          // Calculate the total price including 18% tax
          this.taxTotal = this.totalPrice * 1.18 - this.totalPrice
          this.roundTaxTotal = Math.round(this.taxTotal * 100) / 100
          this.grandTotal =
            this.roundTaxTotal + this.totalPrice + this.shippingCharge
        }
      }
      if (this.productList == undefined || this.productList.length == 0) {
        alert('Please add product to favourites for checkout')
      }
    } catch (error) {
      console.error('failed:', error)
    }
  }
}
