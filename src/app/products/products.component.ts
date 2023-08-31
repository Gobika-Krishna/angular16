import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { orderPlacementService } from '../order-placement/order-placement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(
    private orderservice: orderPlacementService,
    private router: Router
  ) {}
  @ViewChild('productForm', { static: false }) productForm: NgForm;
  addtoCartText: string = 'Add To Cart';
  productsAdded = [];

  products = [
    {
      id: 1,
      name: 'Apple',
      price: '$4.99',
      description: 'A bag of delicious apples!',
      url: 'https://newenglandapples.files.wordpress.com/2014/10/img_5595.jpg',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
    {
      id: 2,
      name: 'Orange',
      price: '$4.99',
      description: 'A bag of delicious Oranges!',
      url: 'https://sc01.alicdn.com/kf/UT8.CaXX2NXXXagOFbXC/fresh-navel-oranges.jpg',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
    {
      id: 3,
      name: 'PASSIONFRUIT',
      price: '$4.99',
      description: 'A bag of delicious Oranges!',
      url: 'https://sc01.alicdn.com/kf/UT8ovSIXQNaXXagOFbXt/Fresh-Passion-Fruit-with-Best-Price-and.jpg',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
    {
      id: 4,
      name: 'PINEAPPLE',
      price: '$4.99',
      description: 'A bag of delicious Pineapple!',
      url: 'https://www.foodmatters.com/media/images/articles/16-powerful-reasons-to-eat-pineapple.jpg',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
    {
      id: 5,
      name: 'Mango',
      price: '$4.99',
      description: 'A bag of delicious Pineapple!',
      url: 'http://membrillo.com.au/wp-content/uploads/2016/11/bg-mango-01.jpg',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
    {
      id: 6,
      name: 'Coconut',
      price: '$4.99',
      description: 'A bag of delicious Coconut!',
      url: 'http://ell.h-cdn.co/assets/16/27/980x490/landscape-1467750721-gettyimages-146896572.jpg',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
    {
      id: 7,
      name: 'Banana',
      price: '$4.99',
      description: 'A bag of delicious Bananas!',
      url: 'https://images.all-free-download.com/images/graphicwebp/fresh_banana_picture_167146.webp',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
    {
      id: 8,
      name: 'Plum',
      price: '$4.99',
      description: 'A bag of delicious Plums!',
      url: 'https://img.freepik.com/premium-photo/plum-texture-high-quality_670382-75472.jpg?size=626&ext=jpg&ga=GA1.2.1022120060.1692397104&semt=ais',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
    {
      id: 9,
      name: 'Avacado',
      price: '$4.99',
      description: 'A bag of delicious Avacados!',
      url: 'https://media.istockphoto.com/id/1359819435/photo/halves-of-fresh-avocado-on-a-cutting-board.webp?b=1&s=170667a&w=0&k=20&c=VMrEYk9r0UT6pVSqWpRjkMdSSRg-KsDaKvh2c2n_G-Y=',
      addtoCartText: 'Add to cart',
      updatedCart: false,
    },
  ];

  addtoCart(index: number, productIndex: number) {
    const pform = this.productForm.value;
    const quantity = pform['product' + index];

    if (quantity > 0) {
      const product = this.products.find((product) => product.id === index);
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
      };

      // Check if the product already exists in the productsAdded list
      const existingProductIndex = this.productsAdded.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex !== -1) {
        this.productsAdded[existingProductIndex] = newProduct;
      } else {
        this.productsAdded.push(newProduct);
      }

      this.products[productIndex].addtoCartText = 'Added to Cart';
    } else {
      this.products[productIndex].addtoCartText = 'Add to cart';

      // Remove the product from productsAdded list
      const existingProductIndex = this.productsAdded.findIndex(
        (p) => p.id === this.products[productIndex].id
      );
      if (existingProductIndex !== -1) {
        this.productsAdded.splice(existingProductIndex, 1);
      }
    }
  }

  updateAddToCartText(product: any) {
    const addedProduct = this.productsAdded.find(
      (p) => p.name === product.name
    );

    if (addedProduct && addedProduct.quantity > 0) {
      product.addtoCartText = 'Update Cart';
    } else {
      if (product.quantity > 0) {
        product.addtoCartText = 'Update Cart';
      } else {
        product.addtoCartText = 'Add to cart';
      }
    }
  }
  onSubmit(form: NgForm) {
    const selectedProducts = this.productsAdded.filter(
      (product) => product.quantity > 0
    );

    const totalPrize = selectedProducts.reduce((total, product) => {
      const productPrice = parseFloat(product.price.replace('$', '')); // Convert price to a numerical value
      return total + productPrice * product.quantity;
    }, 0);
    this.orderservice.orderValue.next({
      quantity: selectedProducts.length, // Correct the property name to "quantity"
      price: totalPrize,
    });
    console.log(this.orderservice.orderValue);
    // Reset the form and any other necessary variables
    // form.resetForm();
    this.productsAdded = [];
    this.products.forEach((product) => {
      product.addtoCartText = 'Add to cart';
    });
    this.router.navigate(['/order']);
  }

  // disable/enable the checkout function
  hasSelectedProducts(): boolean {
    return (
      this.productsAdded.length > 0 &&
      this.productsAdded.some((product) => product.quantity > 0)
    );
  }
}
