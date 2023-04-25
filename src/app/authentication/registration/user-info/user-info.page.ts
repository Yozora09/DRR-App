import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService} from '../../auth.service';
import { User } from '../../user.model';

import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  constructor(
    private http: HttpClient, 
    private authService: AuthService, 
    private loadingCtrl: LoadingController, 
    private router: Router,
    private alertCtrl: AlertController
  ) { }


  //get all input values
  async onSubmit(form:NgForm) {
    const userInfo = form.value
    this.authService.setUserInfo(userInfo)

    const {firstName,middleName,lastName,birthDate,contactNumber} = this.authService.getPersonalInfo()
    const {barangay,street,houseNo} = this.authService.getAddress()
    const {userName,email,password} = this.authService.getUserInfo()

    //loading before next page
    const loading = await this.loadingCtrl.create({
      message: 'Registering New User.',
      spinner: 'crescent',
      cssClass: 'custom-loading',
    });

    loading.present();

    //storing input values to database
    this.authService.signUp(email,password).subscribe((response)=>{
      
      const id = response.localId
      const newUser = new User(
        id,
        firstName,
        middleName,
        lastName,
        birthDate,
        contactNumber,
        barangay,
        street,
        houseNo,
        userName,
        email
        )

        this.http.post('https://drr-app-c1c7e-default-rtdb.firebaseio.com/users.json',
        newUser).subscribe()
        
        //loading duration
        setTimeout(()=>{
          this.loadingCtrl.dismiss();

          form.onReset()
          this.router.navigateByUrl('/confirmation');
        },1500)
      }

      //validate error message
    )
  }

  ngOnInit() {
  }
}