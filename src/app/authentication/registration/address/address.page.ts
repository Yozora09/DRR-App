import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService, Address } from '../../auth.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  onSubmit(form:NgForm) {
    let addRess: Address = form.value
    
    this.authService.setAddress(addRess)
    const address = this.authService.getAddress()
    form.onReset()
  }

  ngOnInit() {
  }

}