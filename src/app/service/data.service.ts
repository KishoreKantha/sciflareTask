import { Injectable } from '@angular/core';
import { User, Users, endPoint } from '../models/bo';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //service variables
  endPoint: endPoint = new endPoint();
  emailRegex: RegExp = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
  mobileRegex: RegExp = new RegExp('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$');
  keyInvalid: boolean = false;
  
  constructor(private toast: MessageService) { }
  // common user validation function
  userValidation(user: User | Users) {
    if (!(user.Firstname && user.Firstname.trim() != '')) {
      this.toast.add({ severity: 'error', summary: 'Firstname Invalid', detail: 'Enter valid details for user creation' })
      return false;
    }
    if (!(user.Lastname && user.Lastname.trim() != '')) {
      this.toast.add({ severity: 'error', summary: 'Lastname Invalid', detail: 'Enter valid details for user creation' });
      return false;
    }
    if (!(user.role && user.role.trim() != '')) {
      this.toast.add({ severity: 'error', summary: 'Role Invalid', detail: 'Enter valid details for user creation' })
      return false;
    }
    if (!(user.email && this.emailRegex.test(user.email))) {
      this.toast.add({ severity: 'error', summary: 'Email Invalid', detail: 'Enter valid details for user creation' })
      return false;
    }
    if (!(user.phoneNo && this.mobileRegex.test(user.phoneNo.toString()))) {
      this.toast.add({ severity: 'error', summary: 'Phone Number Invalid', detail: 'Enter valid details for user creation' })
      return false;
    }
    return true;
  }
}
