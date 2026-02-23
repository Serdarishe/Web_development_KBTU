import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  activeImageIndex: number = 0;
  showGallery: boolean = false;
  showShareMenu: boolean = false;
  liked: boolean = false;

  // ── Star rating ──
  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i);
  }
  isStarFilled(index: number, rating: number): boolean {
    return index < Math.floor(rating);
  }
  isStarHalf(index: number, rating: number): boolean {
    return index === Math.floor(rating) && rating % 1 >= 0.5;
  }

  // ── Image gallery ──
  setActiveImage(index: number): void { this.activeImageIndex = index; }
  nextImage(): void {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.product.images.length;
  }
  prevImage(): void {
    this.activeImageIndex =
      (this.activeImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }
  toggleGallery(): void { this.showGallery = !this.showGallery; }

  // ── Share ──
  toggleShareMenu(): void { this.showShareMenu = !this.showShareMenu; }
  shareWhatsApp(): void {
    const text = encodeURIComponent(`Посмотри этот товар: ${this.product.name} - ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    this.showShareMenu = false;
  }
  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    this.showShareMenu = false;
  }

  // ── Like ──
  onLike(): void {
    this.product.likes++;
    this.liked = true;
  }

  // ── Delete ──
  onDelete(): void {
    if (confirm(`Удалить "${this.product.name}" из списка?`)) {
      this.deleteProduct.emit(this.product.id);
    }
  }

  // ── Price helpers ──
  getInstallment(price: number): string {
    return Math.round(price / 3).toLocaleString('ru-KZ');
  }
  formatPrice(price: number): string {
    return price.toLocaleString('ru-KZ') + ' ₸';
  }
}
