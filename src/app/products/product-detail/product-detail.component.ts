import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  productTitle = 'Round Neck Angular Logo T-Shirt';
  productPrice = '$20';
  productChecks = [
    '100% cotton on the neckline',
    'certified and safe',
    'ash in color',
    'Smooth in quality',
  ];
  bannerImage = 'https://i.imgur.com/Nmuu6Jh.jpg';
  productImages = [
    {
      id: 3435,
      imageUrl: 'https://i.imgur.com/Nmuu6Jh.jpg',
    },
    {
      id: 3436,
      imageUrl: 'https://i.imgur.com/VFcTYyU.jpg',
    },
  ];
  cart = 0;
  stockAvailability = true;
  activeClass = 0;

  addToCart() {
    this.cart += 1;
  }

  currentThumbnail(imageUrl: string, index: number) {
    this.bannerImage = imageUrl;
    this.activeClass = index;
  }
}
