import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Article {
  id: number;
  name: string;
  description?: string;
  price: number;
  totalInShelf: number;
  totalInVault: number;
  storeId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:5002/api/article"; // Corregido para que apunte al endpoint correcto


  public getAll(): Observable<Article[]> {
    return this.http.get<any>(this.apiUrl);
  }

  getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  create(article: Article): Observable<any> {
    return this.http.post(this.apiUrl, article);
  }

  update(id: number, article: Article): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, article);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
