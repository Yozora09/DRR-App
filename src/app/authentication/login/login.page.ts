import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  constructor(private authService: AuthService, private router: Router, 
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  //login authentication
  async onSubmit(form:NgForm) {
    const {email,password} = form.value;
    this.authService.login(email,password).subscribe(async res=>{
      //loading window
      const loading = await this.loadingCtrl.create({
        message: 'Logging in.',
        spinner: 'crescent',
        cssClass: 'custom-loading',
      });
  
      loading.present();

      //loading timeout duration
      setTimeout(()=>{
        this.loadingCtrl.dismiss();

        form.onReset()
        this.router.navigateByUrl("/home-screen")
      },1500)
      
      },

      //validate error message
      async (error: { error: { error: { message: any } } }) => {
        this.authService.login(email, password);

        const {message} = error.error.error;
        if (message === 'EMAIL_NOT_FOUND') {
          //email not found
          const alert = await this.alertCtrl.create({
            header: 'Email Not Found!',
            message: 'Sorry, it seems like the email address you provided was not registered.',
            buttons: ['OK'],
          });
      
          await alert.present();
        }

        else if (message === 'INVALID_PASSWORD') {
          //invalid password
          const alert = await this.alertCtrl.create({
            header: 'Invalid Password',
            message: 'Sorry, you have entered your password incorrectly.',
            buttons: ['OK'],
          });
      
          await alert.present();
        }

        else if (message === 'USER_DISABLED') {
          //disabled
          const alert = await this.alertCtrl.create({
            header: 'Account Disabled',
            message: 'Sorry, this account has been disabled.',
            buttons: ['OK'],
          });
      
          await alert.present();
        }
      }
    )
  }
  
  ngOnInit() {
  }

}


