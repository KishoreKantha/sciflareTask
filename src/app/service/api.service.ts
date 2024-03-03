import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createUser(payload: any, endPoint: string) {
    return this.http.post(endPoint, payload).pipe(map(x => x));
  }
  getUsers(endPoint: string) {
    return this.http.get(endPoint).pipe(map(x => x));
  }
  updateUser(payload: any, endPoint: string) {
    return this.http.put(endPoint, payload).pipe(map(x => x));
  }
  deleteUser(endPoint: string) {
    return this.http.delete(endPoint).pipe(map(x => x));
  }
}
