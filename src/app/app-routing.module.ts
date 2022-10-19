import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './category/pages/list-category/list-category.component';
import { ListCourseComponent } from './course/pages/list-course/list-course.component';

const routes: Routes = [
  { path: 'category', component: ListCategoryComponent},
  { path: 'course', component: ListCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
