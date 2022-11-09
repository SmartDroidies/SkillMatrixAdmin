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
    //FIXME - Better way of reading the base URL by environment
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

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      //client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

function code(arg0: string, code: any): HttpParams {
  throw new Error('Function not implemented.');
}
