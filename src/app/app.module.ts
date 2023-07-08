import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './admin/product/product.component';
import { SellerComponent } from './admin/seller/seller.component';
import { DriverComponent } from './admin/driver/driver.component';
import { UserComponent } from './admin/user/user.component';
import { OrderComponent } from './admin/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    ProductComponent,
    SellerComponent,
    DriverComponent,
    UserComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
