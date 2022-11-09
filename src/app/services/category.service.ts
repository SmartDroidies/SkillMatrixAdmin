import { Injectable } from '@angular/core';
import { Category } from '../category/pages/list-category/list-category.component';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.courseUrl + '/category');
  }

  getCategory(code: string): Observable<Category> {
    let params = new HttpParams();
    params = params.append('code', code);
    return this.http.get<Category>(environment.courseUrl + '/category', {
      params: params,
    });
  }

  updateCategory(category: Category): Observable<any> {
    return this.http.post<Category>(
      environment.courseUrl + '/category',
      category
    );
  }
}
