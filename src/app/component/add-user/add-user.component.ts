import { Component, OnInit } from '@angular/core';
import { User } from '../../models/bo';
import { MessageService } from 'primeng/api';
import { DataService } from '../../service/data.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  constructor(private toast: MessageService, private data: DataService, private api: ApiService) { }
  newUser: User = new User();
  loading: boolean = false;
  ngOnInit() {
    this.newUser = new User();
  }
  createUser() {
    this.loading = true;
    if (this.data.userValidation(this.newUser)) {

      this.api.createUser(this.newUser, this.data.endPoint.API + this.data.endPoint.key + this.data.endPoint.endPoint).subscribe({
        next: (res: any) => {
          this.loading = false;
          this.toast.add({ severity: 'success', summary: 'User created successfully' })
          this.reset()
        },
        error: (err: any) => {
          this.loading = false;
          console.log(err)
          this.toast.add({ severity: 'error', summary: 'User creation failed !' })
          this.reset();
        }

      })
    }
    else
      this.loading = false;
  }
  reset() {
    this.newUser = new User();
  }

}
