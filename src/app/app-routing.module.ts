import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellersComponent } from './sellers/sellers.component';
import { SellerComponent } from './seller/seller.component';
import { FarmHubLoginComponent } from './farm-hub-login/farm-hub-login.component';
import { PropertyComponent } from './property/property.component';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
  {path:'',component:FarmHubLoginComponent},
 {path:'contact',component:ContactComponent}
 ,{
  path:'home',component:HomeComponent
 },{path:'admin-dashboard',component:DashboardComponent},{
  path:'sellers',component:SellersComponent
 },{
  path:'login',component:FarmHubLoginComponent
 },
{ path:'sellers/seller/:id',component:SellerComponent},
{path:'seller/property/:id',component:PropertyComponent},
{path:'properties',component:PropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
