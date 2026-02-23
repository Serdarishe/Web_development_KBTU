import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online-store';

  categories: Category[] = [];
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  selectedCategoryId: number | null = null;
  searchQuery: string = '';
  sortBy: string = 'default';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  minRating: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
    this.filteredProducts = [];
  }

  get selectedCategory(): Category | null {
    return this.categories.find(c => c.id === this.selectedCategoryId) ?? null;
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
    this.applyFilters();
  }

  applyFilters(): void {
    if (this.selectedCategoryId === null) {
      this.filteredProducts = [];
      return;
    }

    let result = this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q));
    }
    if (this.minPrice !== null) {
      result = result.filter(p => p.price >= this.minPrice!);
    }
    if (this.maxPrice !== null) {
      result = result.filter(p => p.price <= this.maxPrice!);
    }
    if (this.minRating > 0) {
      result = result.filter(p => p.rating >= this.minRating);
    }

    switch (this.sortBy) {
      case 'price-asc':  result = [...result].sort((a, b) => a.price - b.price); break;
      case 'price-desc': result = [...result].sort((a, b) => b.price - a.price); break;
      case 'rating':     result = [...result].sort((a, b) => b.rating - a.rating); break;
    }

    this.filteredProducts = result;
  }

  onProductDeleted(productId: number): void {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.sortBy = 'default';
    this.minPrice = null;
    this.maxPrice = null;
    this.minRating = 0;
    this.applyFilters();
  }
}
