import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatePipe } from './Pipes/State.pipe';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { SellerRegisterService } from './model/service/seller-register.service';
import { AdminService } from './Services/admin.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SellersComponent } from './sellers/sellers.component';
import { SellerComponent } from './seller/seller.component';
import { LoginComponent } from './login/login.component';
import { FarmHubLoginComponent } from './farm-hub-login/farm-hub-login.component';
import { FilterSellerComponent } from './filter-seller/filter-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SellerRegisterComponent,
    DashboardComponent,
    StatePipe,
    HomeComponent,
    PopupComponent,
    SellersComponent,
    SellerComponent,
    LoginComponent,
    FarmHubLoginComponent,
    FilterSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, RouterModule, ReactiveFormsModule,
    HttpClientModule,   
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, BrowserAnimationsModule
  ],
  providers: [SellerRegisterService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
