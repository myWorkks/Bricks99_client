import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerRegisration } from '../model/seller-regisration';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient) { }


adminLogin(data:any):Observable<Object>{
  return this.http.post("http://localhost:5655/bricks99/login-api/login",data)
}

  viewSellers():Observable<SellerRegisration[]>
{
  
  
  return this.http.get<SellerRegisration[]>("http://localhost:5655/bricks99/admin-api/view-all/",{responseType:'json'});
  
}


viewDetails(id:Number):Observable<SellerRegisration>{
  return this.http.get<SellerRegisration>("http://localhost:5655/bricks99/admin-api/view-seller/"+id,{responseType:'json'});
}

approveSeller(id:Number):Observable<String>{
  return  this.http.put<String>("http://localhost:5655/bricks99/admin-api/sellers/approve/"+id,{responseType:'json'})
}


denySeller(id:Number):Observable<String>{
  return  this.http.put<String>("http://localhost:5655/bricks99/admin-api/sellers/reject/"+id,{responseType:'json'})
}
}
