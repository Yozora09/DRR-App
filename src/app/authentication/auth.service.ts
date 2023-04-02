import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export interface PersonalInfo {
  firstName: string,
  middleName: string,
  lastName: string,
  birthDate: any,
  contactNumber: number
}

export interface Address {
  barangay: string,
  street: string,
  houseNo: number
}

export interface User {
  userName: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    personalInfo : PersonalInfo = {
      firstName: "",
      middleName: "",
      lastName: "",
      birthDate: "",
      contactNumber: 0
    }

    address = {
      barangay: "",
      street: "",
      houseNo: 0
    }

    user = {
      userName: "",
      email: "",
      password: ""
    }

  constructor(private http: HttpClient) { }

  //get personal info
  setPersonalInfo(personalInfo: PersonalInfo) {
    this.personalInfo = personalInfo
  }

  getPersonalInfo() {
    return this.personalInfo
  }
  
  //get address
  setAddress(address: Address) {
    this.address = address
  }

  getAddress() {
    return this.address
  }

  //get user info
  setUserInfo(user: User) {
    this.user = user
  }

  getUserInfo() {
    return this.user
  }


  //for registration of email, pass
  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`,
      { email, password, returnSecureToken: true }
    );
  }

  //for authentication of email, pass
  login(email: string, password: string) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
      { email, password, returnSecureToken: true }
    );
  }
}
