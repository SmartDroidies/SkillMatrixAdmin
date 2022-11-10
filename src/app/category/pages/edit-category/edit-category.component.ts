import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
//import groupsJson from '../../../../assets/groups.json';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  //FIXME - Make this a types form
  categoryForm = new UntypedFormGroup({
    code: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    order: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    title: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    //weight: new UntypedFormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    active: new UntypedFormControl(''),
  });

  //groups: Group[] = groupsJson;

  //categoryLoader: Loader = new Loader();

  constructor(
    private CategoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkParam();
  }

  checkParam() {
    this.activatedRoute.paramMap.subscribe((params) => {
      //If code is passed in parameter consider it as modify product
      if (params.get('code')) {
        this.loadCategory(params.get('code'));
      }
    });
  }

  loadCategory(code: any) {
    this.CategoryService.getCategory(code).subscribe(
      (category: Category) =>
        this.categoryForm.patchValue({
          code: category.code,
          order: category.order,
          title: category.title,
          //weight: category.weight,
          active: category.active,
        })
      //(error: any) => this.toastr.error(error, "Edit Category")
    );
  }

  onSubmit() {
    //this.categoryLoader.setLoading(true);

    let controls = this.categoryForm.controls;

    let category = new Category(
      controls['code'].value,
      controls['order'].value,
      controls['title'].value,
      controls['active'].value
    );

    this.CategoryService.updateCategory(category).subscribe((response: any) => {
      //this.toastr.success('Category updated', 'Submit result');
      this.router.navigate(['/category/list']);
      //this.categoryLoader.setStatus(Loader.SUCCESS);
      // }, (error: any) => {
      //   this.toastr.error(error, "Update category");
      //   this.categoryLoader.setStatus(Loader.ERROR);
      // }
    });
  }
}
