import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/bo';
import { ApiService } from '../../service/api.service';
import { DataService } from '../../service/data.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent implements OnInit {
  constructor(private api: ApiService, public data: DataService, private toast: MessageService, private confirmationService: ConfirmationService) { }
  usersList: Users[] = [];
  tableLoading: boolean = false;
  cols: any[] = [];
  clonedProducts: { [s: string]: Users } = {};
  searchKey: string = "";
  ngOnInit() {
    this.cols = [
      { field: 'Firstname', header: 'Firstname' },
      { field: 'Lastname', header: 'Lastname' },
      { field: 'role', header: 'Role' },
      { field: 'email', header: 'Email' },
      { field: 'phoneNo', header: 'Phone Number' },
      { field: 'active', header: 'Status' }]
    this.getUsers();
  }
  getUsers() {
    this.usersList = []
    this.tableLoading = true;
    this.api.getUsers(this.data.endPoint.API + this.data.endPoint.key + this.data.endPoint.endPoint).subscribe({
      next: (res: any) => {
        this.usersList = res && res.length > 0 ? res : [];
        this.tableLoading = false;
      },
      error: (err: any) => {
        this.usersList = [];
        this.tableLoading = false;
      }
    })
  }
  onRowEditInit(user: Users) {
    this.clonedProducts[user._id as string] = { ...user };
  }

  onRowEditSave(user: Users) {
    if (this.data.userValidation(user)) {
      delete this.clonedProducts[user._id as string];
      var payload = JSON.parse(JSON.stringify(user));
      var id = payload._id;
      delete payload['_id'];
      this.tableLoading = true;
      this.api.updateUser(payload, this.data.endPoint.API + this.data.endPoint.key + this.data.endPoint.endPoint + '/' + id).subscribe({
        next: (res: any) => {
          this.toast.add({ severity: 'success', summary: 'Success', detail: 'User details updated' });
          this.getUsers();
        },
        error: (err: any) => {
          this.toast.add({ severity: 'error', summary: 'Failed', detail: 'User details update action failed' });
          this.getUsers();
        }
      })

    }
  }

  onRowEditCancel(user: Users, index: number) {
    this.usersList[index] = this.clonedProducts[user._id as string];
    delete this.clonedProducts[user._id as string];
  }
  deleteUser(id: string, e: Event) {
    this.confirmationService.confirm({
      target: e.target as EventTarget,
      message: 'Are you sure you want to delete this user?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.api.deleteUser(this.data.endPoint.API + this.data.endPoint.key + this.data.endPoint.endPoint + "/" + id).subscribe({
          next: (res: any) => {
            this.toast.add({ severity: 'success', summary: 'Success', detail: 'User deleted successfully' })
            this.getUsers();
          },
          error: (err: any) => {
            this.toast.add({ severity: 'error', summary: 'Failed', detail: 'User delete action failed' });
            this.getUsers();
          }
        })
      }
    });
  }

}
