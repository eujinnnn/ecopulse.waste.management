import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = 'http://localhost:5000/api/notifications';

  constructor(private http: HttpClient) { }

  getNotifications(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
}
