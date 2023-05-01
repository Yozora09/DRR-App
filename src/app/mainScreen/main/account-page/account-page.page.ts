import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from 'src/app/authentication/user.model';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {

  user!:User;

  constructor(private mainService:MainService, private router: Router, private loadingCtrl: LoadingController) { }

  async logout() {
    //loading window
    const loading = await this.loadingCtrl.create({
      message: 'Logging out.',
      spinner: 'crescent',
      cssClass: 'custom-loading',
    });

    loading.present();

    //loading timeout duration
    setTimeout(()=>{
      this.loadingCtrl.dismiss();
      
      this.router.navigateByUrl("/welcome")
    },1500)
  }

  ngOnInit() {
    this.mainService.fetchUsers();
    this.user = this.mainService.getCurrentUser();
  }
  async ionViewWillEnter() {
    await this.mainService.fetchUsers();
    this.user = await this.mainService.getCurrentUser();
  }
  async ionViewDidEnter() {
    await this.mainService.fetchUsers();
    this.user = await this.mainService.getCurrentUser();
  }

}
