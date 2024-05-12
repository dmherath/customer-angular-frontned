import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer.interface';

const BASE_URL = ["http://localhost:8081"];


@Injectable({
  providedIn: 'root'
})



export class CustomerService {

  constructor(private http : HttpClient) { 
    
  }
  postCustomer(customer:any): Observable<any>{
      return this.http.post(BASE_URL+"/api/save",customer);
  }

  getAllCUstomer(): Observable<any>{
    return this.http.get(BASE_URL+"/api/get-all");
  }

  getCustomerById(id:number) : Observable<any>{
    return this.http.get(BASE_URL+"/api/get-by-id/"+id);
  }

  updateCustomer(id: number, customer: Customer): Observable<any>{
    return this.http.put(BASE_URL+"/api/update/"+id,customer);
  }

  deleteCustomer(id: number): Observable<any>{
    return this.http.delete(BASE_URL+"/api/delete/"+id)
  }
}
