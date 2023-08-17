import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../services/product.service'
import { FavouriteProductService } from '../services/favourite-product.service'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  productsList: any[] | undefined
  productDetail: any

  constructor(
    private productService: ProductService,
    private favouriteProductService: FavouriteProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  async ngOnInit() {
    await this.getAllProducts()
  }

  async getAllProducts() {
    try {
      const response = await this.productService
        .getAllSampleProducts()
        .toPromise()
      this.productsList = response
    } catch (error) {
      console.error('failed:', error)
    }
  }

  async addFavoutite(id: any) {
    this.productDetail = await this.productService
      .getProductDetailByProdcuctId(id)
      .toPromise()
    const localId = localStorage.getItem('userId')

    this.favouriteProductService
      .addFavouriteProduct(this.productDetail, localId)
      .subscribe({
        next: (response) => {
          alert('Successfully favourite product added.')
        },
        error: (error) => {
          alert('Product already in your favourite list')
        },
      })
  }
}
