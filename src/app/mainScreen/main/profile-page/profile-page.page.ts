import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/authentication/user.model';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  user!:User;

  constructor(private mainService: MainService,
    private loadingCtrl: LoadingController, 
    private alertCtrl: AlertController
    ) { }

  async onSubmit(form:NgForm) {
    const info = form.value
    this.mainService.setInfo(info)

    const {firstName,middleName,lastName,birthDate,contactNumber,barangay,street} = this.mainService.getInfo()

    this.mainService.updateUser(firstName,middleName,lastName,birthDate,contactNumber,barangay,street)

    //loading window
    const loading = await this.loadingCtrl.create({
      message: 'Updating.',
      spinner: 'crescent',
      cssClass: 'custom-loading',
    });

    const alert = await this.alertCtrl.create({
      header: 'Profile Updated!',
      message: 'Your profile has been updated.',
      buttons: ['OK'],
    });
    
    loading.present();
    
    //loading timeout duration
    setTimeout(()=>{
      this.loadingCtrl.dismiss();
      alert.present();
      
    },1500)
  }

  async ionViewWillEnter() {
    await this.mainService.fetchUsers();
    this.user = await this.mainService.getCurrentUser(); 
  }

  ngOnInit() {
    this.mainService.fetchUsers();
    this.user = this.mainService.getCurrentUser();
  }

  async update() {
    await this.mainService.fetchUsers();
    this.user = await this.mainService.getCurrentUser();
  }

}
