import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/authentication/user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  user!:User;

  constructor(private mainService: MainService) { }

  onSubmit(form:NgForm) {
    const info = form.value
    this.mainService.setInfo(info)

    const {firstName,middleName,lastName,birthDate,contactNumber,barangay,street} = this.mainService.getInfo()

    this.mainService.updateUser(firstName,middleName,lastName,birthDate,contactNumber,barangay,street)

  }

  ngOnInit() {
    this.user = this.mainService.getCurrentUser();
    this.mainService.fetchUsers();
  }
  
  update(){
    this.mainService.fetchUsers();
  

  }

}
