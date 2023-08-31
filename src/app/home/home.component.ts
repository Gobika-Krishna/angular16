import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cuisines = [
    {
      title: 'German Cuisine',
      description:
        'Whilst there are regional variations in food culture, most German recipes focus heavily on bread, potatoes, and meat, especially pork, as well as plenty of greens such as types of cabbage and kale.',
    },
    {
      title: 'Indian Cuisine',
      description:
        'Traditional Indian food is renowned worldwide for its wonderful use of herbs and spices, and its diverse range of deep-fried snacks, pastries, curries, gravies, sauces, rice dishes, tandoor-cooked meats.',
    },
    {
      title: 'Mexican Cuisine',
      description:
        'Mexican street food can include tacos, quesadillas, pambazos, tamales, huaraches, alambres, al pastor, and food not suitable to cook at home, including barbacoa, carnitas.',
    },
    // Add more cuisines as needed
  ];

  topics = [
    {
      title: 'Wholesome Delights',
      desc: 'Nourishing Recipes for a Vibrant You',
    },
    {
      title: 'Nutrition on a Plate',
      desc: 'Culinary Creations for a Healthier You',
    },
    {
      title: 'Flavorful Wellness',
      desc: 'Satisfying Recipes for a Balanced Life',
    },
  ];

  sections = [
    {
      title: 'Get in Touch',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.',
    },
    // Add more sections as needed
  ];
  ngOnInit(): void {}
}
