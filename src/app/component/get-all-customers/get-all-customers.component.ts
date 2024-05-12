import { Component } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer.interface';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})


export class GetAllCustomersComponent {

  customers: Customer[] = [];

  constructor(private customerService : CustomerService){}

  ngOnInit(){
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.getAllCUstomer().subscribe((res)=>{
      console.log(res);
      this.customers=res;
    })
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe((res)=>{
      console.log(res);
      this.ngOnInit()
    })
  }
}
