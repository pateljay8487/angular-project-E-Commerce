import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LogInComponent } from './log-in/log-in.component'
import { RegisterComponent } from './register/register.component'
import { FavouritesComponent } from './favourites/favourites.component'
import { UserInfoComponent } from './user-info/user-info.component'
import { HomePageComponent } from './home-page/home-page.component'
import { AuthGuard } from './services/auth.guard'
import { ContactUsComponent } from './contact-us/contact-us.component'
import { CheckoutComponent } from './checkout/checkout.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'homePage/:id',
    component: HomePageComponent,
  },
  {
    path: 'favourites/:id',
    component: FavouritesComponent,
  },
  { path: 'userInfo/:id', component: UserInfoComponent },
  { path: 'contactUs/:id', component: ContactUsComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
