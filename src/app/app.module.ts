import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCustomerComponent } from './component/post-customer/post-customer.component';
import { GetAllCustomersComponent } from './component/get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PostCustomerComponent,
    GetAllCustomersComponent,
    UpdateCustomerComponent,
    GetAllCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
