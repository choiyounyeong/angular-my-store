import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'detail', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
