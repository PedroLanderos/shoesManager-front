import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = 'http://localhost:5002/api/store';

  constructor(private http: HttpClient) { }

  getAllStores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getStoreById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createStore(store: any): Observable<any> {
    return this.http.post(this.apiUrl, store);
  }

  updateStore(id: number, store: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, store);
  }

  deleteStore(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
