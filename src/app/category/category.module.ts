import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [ListCategoryComponent, EditCategoryComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    CategoryRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
  ],
})
export class CategoryModule {}
