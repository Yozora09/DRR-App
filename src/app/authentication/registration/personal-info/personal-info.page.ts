import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService, PersonalInfo } from '../../auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  onSubmit(form:NgForm) {
    let personalInfo: PersonalInfo = form.value
    
    this.authService.setPersonalInfo(personalInfo)
    const personal = this.authService.getPersonalInfo()
    form.onReset()
  }

  ngOnInit() {
  }

}