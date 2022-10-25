import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ListCategoryComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
