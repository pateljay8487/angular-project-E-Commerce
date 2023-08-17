import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LogInComponent } from './log-in/log-in.component'
import { RegisterComponent } from './register/register.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { UserInfoComponent } from './user-info/user-info.component'
import { FavouritesComponent } from './favourites/favourites.component'
import { HomePageComponent } from './home-page/home-page.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './services/auth.guard'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    NavBarComponent,
    UserInfoComponent,
    FavouritesComponent,
    HomePageComponent,
    ContactUsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
