import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './pages/list-category/list-category.component';

const routes: Routes = [
    {
        path: 'category',
        children: [
            { path: 'list', component: ListCategoryComponent },
            { path: 'edit', component: ListCategoryComponent },
            { path: 'edit/:code', component: ListCategoryComponent }
        ]
    }
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
