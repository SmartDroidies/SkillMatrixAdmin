import { HttpClient } from '@angular/common/http';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';



export interface Category {
  code: number;
  group: string;
  description: string;
  weight: number;
  active: boolean;
}

const Category_Data: Category[] = [
  { code: 101, group: 'Academics', description: 'Courses under academics', weight: 1, active: true },
  { code: 102, group: 'Arts', description: 'Learn some Arts', weight: 1, active: true },
  { code: 101, group: 'Fitness', description: 'Keep yourself fit and healthy', weight: 1, active: true },
  { code: 101, group: 'Sports', description: 'Sports keeps us healthy too', weight: 1, active: true }
];

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})

export class ListCategoryComponent implements OnInit {
  displayedColumns: string[] = ['code', 'group', 'description', 'weight', 'active'];
  categories: Category[] = [];
  dataSource = Category_Data;
  // dataSource: MatTableDataSource<Category> = new MatTableDataSource(this.categories);
  // categoriesLoader: Loader = new Loader();
  refresh: any;
  CategoryService: any;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    console.log("Load categories from http");
    this.httpClient.get("/course-api/category")
      .subscribe(data => {
        console.log("Resoponse received", data);
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


