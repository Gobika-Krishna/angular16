import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrderPlacementComponent } from './order-placement/order-placement.component';
import { AuthGuard } from './auth/auth.guard';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsComponent } from './terms/terms.component';

// Lazy load the  feature modules
const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'order',
    component: OrderPlacementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // Preloading the lazy load bundles to avoid delay
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
