import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCourseComponent } from './pages/list-course/list-course.component';
import { AppRoutingModule } from '../app-routing.module';
import { CourseRoutingModule } from './course-routing.module';



@NgModule({
  declarations: [
    ListCourseComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
