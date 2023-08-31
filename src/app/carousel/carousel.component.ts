import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}
  selectedSlideIndex = 0; // Initial index

  carouselImages = [
    {
      url: 'https://www.allrecipes.com/thmb/fuzYpviP0rD6LQXI2i2ITuKpMEs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3695197_Fresh-Corn-and-Zucchini-Saute_Photo-by-Allrecipes-5f419c7e30594d61985e59e9070c51db.jpg',
      name: 'Explore recipe 1',
    },
    {
      url: 'https://images.freeimages.com/images/large-previews/d27/cooking-chicken-1520344.jpg',
      name: 'Explore recipe 2',
    },
    {
      url: 'https://www.allrecipes.com/thmb/ruGQ4hc9-haJIykmHLYWisdm3Ck=/800x533/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/1119464-chicken-avocado-and-mango-salad-ReneePaj-4x3-1-a63c490a4d504bfda317705363e79d0a.jpg',
      name: 'Explore recipe 3',
    },
    {
      url: 'https://www.allrecipes.com/thmb/inDhmEBC9MMIyIDLtpri5KMtPks=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222763-balsamic-grilled-zucchini-3x4-530-copy-e51adadb2d9d4aef884572345b8644c4.jpg',
      name: 'Explore recipe 4',
    },
  ];

  ngOnInit() {}
}
