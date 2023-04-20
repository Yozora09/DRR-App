import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/authentication/auth.service';



@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {

  constructor(private datePipe: DatePipe, private authService: AuthService) { }

  //get current date
  getCurrentDate = this.datePipe.transform(new Date(), 'MMM d, y');
  
  async getData() {
     
  }

  ngOnInit() {
  }

}
