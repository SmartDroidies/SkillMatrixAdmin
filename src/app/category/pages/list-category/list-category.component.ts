import { HttpClient } from '@angular/common/http';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';

export interface Category {
  title: string;
  code: string;
  order: number;
  // weight: number;
  active: boolean;
}

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent implements OnInit {
  displayedColumns: string[] = ['title', 'code', 'order', 'active'];
  // categories: Category[] = [];
  dataSource: any;
  // dataSource: MatTableDataSource<Category> = new MatTableDataSource(this.categories);
  // categoriesLoader: Loader = new Loader();
  refresh: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    console.log('Load categories from http');
    this.httpClient.get('/course-api/category').subscribe((data) => {
      console.log('Resoponse received', data);
      this.dataSource = data;
    });
    // this.categoriesLoader.setLoading(true);

    //Collect the categories from service
    // this.CategoryService
    //   .getCategories()
    //   .subscribe((categories: Category[]) => {
    //     this.categories = categories;
    //     // this.dataSource = new MatTableDataSource(categories);
    //     // this.categoriesLoader.setStatus(Loader.SUCCESS);
    //   });
  }
}
