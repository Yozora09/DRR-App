import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { User } from 'src/app/authentication/user.model';

export interface Info {
  firstName: string,
  middleName: string,
  lastName: string,
  birthDate: any,
  contactNumber: number,
  barangay: string,
  street: string,
  houseNo: number,
  userName: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})

export class MainService {
  users:User[] = []
  documentId = ""


  info : Info = {
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    contactNumber: 0,
    barangay: "",
    street: "",
    houseNo: 0,
    userName: "",
    email: ""
  }

  constructor(
    private http:HttpClient, 
    private authService:AuthService
  ) { }

  setInfo(info: Info) {
    this.info = info
  }

  getInfo() {
    return this.info
  }

  fetchUsers(){
    this.http.get('https://drr-app-c1c7e-default-rtdb.firebaseio.com/users.json').subscribe((data:any)=>{
      
      for(const user in data){
        const firstName = data[user].firstName
        const middleName = data[user].middleName
        const lastName = data[user].lastName
        const birthDate = data[user].birthDate
        const contactNumber = data[user].contactNumber
        const barangay = data[user].barangay
        const street = data[user].street
        const houseNo = data[user].houseNo
        const userName = data[user].userName
        const email = data[user].email
        const id = data[user].id

        if (id === this.authService.getUserLocalId()) {
          this.documentId = user
        }

        const allUser = new User(
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

        this.users.push(allUser);

      }
    })
  }

  updateUser(
    firstName: string,
    middleName: string,
    lastName: string,
    birthDate: any,
    contactNumber: number,
    barangay: string,
    street: string,
  ) {

    const user = this.getCurrentUser();
    console.log(user);

    const newUser = {
      id:user.id,
      firstName:firstName,
      middleName:middleName,
      lastName: lastName,
      birthDate: birthDate,
      contactNumber: contactNumber,
      barangay: barangay,
      street: street,
      houseNo: user.houseNo,
      userName: user.userName,
      email: user.email
    }

    console.log(newUser)
    this.http.put(`https://drr-app-c1c7e-default-rtdb.firebaseio.com/users/${this.documentId}.json`,newUser).subscribe();
  }

  getCurrentUser(){
    const userLocalId = this.authService.getUserLocalId()
    const currentUser = this.users.filter(user=>
      user.id === userLocalId
    )[0];
    return currentUser;
  }

  getUsers(){
    return this.users;
  }
}
