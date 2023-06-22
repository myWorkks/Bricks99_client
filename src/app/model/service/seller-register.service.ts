import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellerRegisterService {

  constructor(private http: HttpClient) { }
  register(formData: any) :Observable<object>{
    return this.http.post("http://localhost:1111/bricks99/seller-api/register/", formData);
  }
}
