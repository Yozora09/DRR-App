import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/authentication/auth.service';
import { MainService } from '../main.service';
import { User } from 'src/app/authentication/user.model';



@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {
  
  user!:User;

  constructor(
    private datePipe: DatePipe, 
    private mainService: MainService
  ) { }

  //get current date
  getCurrentDate = this.datePipe.transform(new Date(), 'MMM d, y');
  
  ngOnInit() {
    this.user = this.mainService.getCurrentUser();
  }

}
