import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

export class CategoryService {
    constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    //FIXME - Better way of reading the base URL by environment
    return this.http.get<Category[]>(environment + "/category")
  }

}