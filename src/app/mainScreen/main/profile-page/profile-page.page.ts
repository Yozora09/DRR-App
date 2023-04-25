import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  constructor(private mainService: MainService) { }

  // onSubmit(form:NgForm) {
  //   const info = form.value
  //   this.mainService.setInfo(info)

  //   const {firstName,middleName,lastName,birthDate,contactNumber,barangay,street,houseNo,userName,email} = this.mainService.getInfo()

  //   this.mainService.updateUser(firstName,middleName,lastName,birthDate,contactNumber,barangay,street,houseNo,userName,email)

  // }

  ngOnInit() {
    
  }

}
