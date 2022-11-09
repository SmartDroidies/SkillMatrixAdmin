import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { Category } from '../models/category';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CategoryService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all categories', () => {
    service.getCategories().subscribe((res) => {
      expect(res).toEqual(mockCategories);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: '/course-api/category',
    });

    req.flush(mockCategories);
  });

  it('should call updateCategory and return the updates category from the API', () => {
    const updateCategory: Category = {
      code: '',
      order: 0,
      title: '',
      active: false,
    };

    const mockCategory: Category = {
      active: true,
      code: 'fitness',
      order: 30,
      title: 'Fitness',
    };

    service.updateCategory(mockCategory).subscribe((data) => {
      expect(data).toEqual(updateCategory);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: '/course-api/category',
    });

    req.flush(updateCategory);
  });

  it('should get the selected category', () => {
    const mockCategory: Category = {
      code: 'fitness',
      order: 0,
      title: '',
      active: false,
    };
    service.getCategory('fitness').subscribe((res) => {
      expect(res).toEqual(mockCategory);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: '/course-api/category?code=fitness',
    });

    req.flush(mockCategory);
  });
});

const mockCategories: jasmine.Expected<jasmine.ArrayLike<Category>> = [
  {
    active: true,
    code: 'fitness',
    order: 30,
    title: 'Fitness',
  },
  {
    active: true,
    code: 'artcraft',
    order: 20,
    title: 'Arts & Crafts',
  },
];
