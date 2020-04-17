import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './admin/driver/driver.component';
import { SellerComponent } from './admin/seller/seller.component';
import { ProductComponent } from './admin/product/product.component';
import { UserComponent } from './admin/user/user.component';


const routes: Routes = [
  { path: '', component:DashboardComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'driver', component:DriverComponent },
  { path: 'seller', component:SellerComponent },
  { path: 'product', component:ProductComponent },
  { path: 'user', component:UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
