import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  path = 'http://' + window.location.hostname + ':3000';

  constructor(
    private http: HttpClient
  ) { }

  getHistory() {
    return this.http.get(this.path + '/api/history');
  }

  clearHistory() {
    return this.http.get(this.path + '/api/clearHistory');
  }
}
