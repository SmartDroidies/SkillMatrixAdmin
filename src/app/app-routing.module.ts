import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from './category/category.module';
import { CourseModule } from './course/course.module';

const routes: Routes = [
  { path: 'category', component: CategoryModule},
  { path: 'course', component: CourseModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
