import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './service/data.service';
import { endPoint } from './models/bo';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'UserPortal';
  constructor(public router: Router, public data: DataService, private toast: MessageService) { }
  ngOnInit(): void {
    this.data.endPoint = new endPoint();
    var key = localStorage.getItem('key');
    this.data.endPoint.key = key ? key : this.data.endPoint.key;
  }
  // this function is for save access key
  saveKey(key: string) {
    if (key != null && key != undefined && key.trim().length > 0) {
      localStorage.setItem('key', key);
      this.data.endPoint.key = key;
      this.data.keyInvalid = false;
      window.location.reload();
    } else
      this.toast.add({ severity: 'error', summary: 'Entered key is Invalid', detail: 'Please enter valid key for continue' })
  }
}
