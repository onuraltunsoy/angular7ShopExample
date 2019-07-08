import { Component, OnInit } from '@angular/core';
import { CategoryService } from './service/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) {

  }
  categories: Category[];
  selectedCategory: Category;

  
  getCategories() {
    this.categoryService.getCategories().subscribe(
      response => this.categories = response);
  }
  ngOnInit() {
    this.getCategories();
  }
  onSelect(category?: Category) {
    console.log(category)
    if (category) {
      this.selectedCategory = category;
    } else {
      this.selectedCategory = null;
    }
  }

}
