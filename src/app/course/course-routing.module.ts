import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCourseComponent } from './pages/list-course/list-course.component';

const routes: Routes = [
    {
        path: 'course',
        children: [
            { path: 'list', component: ListCourseComponent },
            { path: 'edit', component: ListCourseComponent },
            { path: 'edit/:code', component: ListCourseComponent }
        ]
    }
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }
