import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

  //login authentication
  async onSubmit(form:NgForm) {
    const {email,password} = form.value;
    this.authService.login(email,password).subscribe(async res=>{
      
      try {

        const loading = await this.loadingCtrl.create({
          message: 'Login Successfully.',
          spinner: 'crescent',
          cssClass: 'custom-loading',
        });
    
        loading.present();

        setTimeout(()=>{
          this.loadingCtrl.dismiss();

          form.onReset()
          this.router.navigateByUrl("/home-screen")
        },1500)

      } catch (error:any) {
        console.log(error.error.message)
      }
    })
   
  }

  //show password
  
  ngOnInit() {
  }

}

