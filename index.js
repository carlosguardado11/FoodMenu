"use strict";
console.log ('hello world');
let menu = {
    drinks: [
      'Water',
      'Tea',
      'Sweet Tea',
      'Coke',
      'Dr. Pepper',
      'Sprite',
    ],
  
    entrees: [
      'Hamburger w/ Fries',
      'Grilled Cheese w/ Tater Tots',
      'Grilled Chicken w/ Veggies',
      'Chicken Fried Steak w/ Mashed Potatoes',
      'Fried Shrimp w/ Coleslaw',
      'Veggie Plate',
    ],
  
    desserts: [
      'Cheesecake',
      'Chocolate Cake',
      'Snickerdoodle Cookie',
    ],
  };

  window.onload = function() {
    const category = document.getElementById("category");
    category.onchange = categorySelected;
  }

  function categorySelected() {
    const category = document.getElementById("category");
    let categorySelected = category.value;
    console.log(categorySelected);
  }
  if (categorySelected == 1) {
   console.log('good');
  }

  
