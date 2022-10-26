import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table' ;



export interface Category {
   code: number;
   group: string;
   description: string;
   weight: number;
   active: string;
}

const Category_Data: Category[] = [
  {code: 101, group: 'Academics', description: 'Courses under academics', weight: 1, active: 'YES' },
  {code: 102, group: 'Arts', description: 'Learn some Arts', weight: 1, active: 'YES' },
  {code: 101, group: 'Fitness', description: 'Keep yourself fit and healthy', weight: 1, active: 'YES' },
  {code: 101, group: 'Sports', description: 'Sports keeps us healthy too', weight: 1, active: 'YES' }
];

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})

export class ListCategoryComponent {
  displayedColumns: string[] =['code', 'group', 'description', 'weight', 'active'];
  dataSource = Category_Data;
refresh: any;
}

