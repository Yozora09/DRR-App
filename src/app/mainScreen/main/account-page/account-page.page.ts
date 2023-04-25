import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from 'src/app/authentication/user.model';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {

  user!:User;

  constructor(private mainService:MainService) { }

  ngOnInit() {
    this.user = this.mainService.getCurrentUser();
    this.mainService.fetchUsers();
    // this.mainService.updateUser();
  

  }

}
