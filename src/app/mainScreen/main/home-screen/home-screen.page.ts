import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/authentication/auth.service';
import { MainService } from '../main.service';
import { User } from 'src/app/authentication/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface WeatherResponseData {
  current: object;
  hourly: Array<object>;
  lat: number;
  lon: number;
  daily: Array<object>;
  timezone: string;
  timezone_offset: number;
}

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})

export class HomeScreenPage implements OnInit {
  
  weatherData: any;
  user!:User;
  icon!: string;

  constructor(
    private datePipe: DatePipe, 
    private mainService: MainService,
    private http: HttpClient
  ) { }

  //get current date
  getCurrentDate = this.datePipe.transform(new Date(), 'MMM d, y');
  
  ngOnInit() {
    this.mainService.fetchUsers();
    this.user = this.mainService.getCurrentUser();
    this.getWeatherDetails();
  }
  async ionViewWillEnter() {
    await this.mainService.fetchUsers();
    this.user = await this.mainService.getCurrentUser();
  }
  async ionViewDidEnter() {
    await this.mainService.fetchUsers();
    this.user = await this.mainService.getCurrentUser();
  }
  

  getWeatherDetails() {
    this.http
      .get<WeatherResponseData>(
        `${
          environment.weatherApiUrl
        }onecall?lat=${15.367}&lon=${120.900}&units=metric&exclude=minutely&appid=${
          environment.weatherApiKey
        }`
      )
      .subscribe((data: any) => {
        this.weatherData = data.current;
        this.icon = "https://openweathermap.org/img/wn/"+this.weatherData.weather[0].icon+"@2x.png";
      });
  }
}
