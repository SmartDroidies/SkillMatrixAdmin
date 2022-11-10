import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';

const routes: Routes = [
  {
    path: 'category',
    children: [
      { path: 'list', component: ListCategoryComponent },
      { path: 'edit', component: EditCategoryComponent },
      { path: 'edit/:title', component: EditCategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
