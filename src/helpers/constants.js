export const TOGGLE_POPUP = 'togglePopup'
export const ACTIVE_CLS = 'active';
export const CART_FORM_ID = '#cartForm';
export const CURRENCY_SYMBOL = '&#8364;';
export const fallbackCoverImgRest = '../assets/restaurants/placeholder.png';
export const fallbackCoverImgMeal = '../assets/goods/placeholder.png';
export const data = {
  restaurants: [
    {
      id: 0,
      name: 'Pizza Plus',
      logoImg: '../assets/restaurants/pizzaplus.jpg',
      rating: 4.5,
      meals: ['pizza'],
      averageOrderTime: '50 min',
      minMealPrice: 9,
      stock: [
        {
          id: 0,
          article: 'Pizza Margherita',
          photo: '',
          ingredients: 'Pizza dough, tomatoes, mozzarella',
          price: 9,
        },
        {
          id: 1,
          article: 'Proscutto di Fungi',
          photo: '../assets/goods/image-007.jpg',
          ingredients: 'Pizza dough, tomatoes, mozzarella, mushrooms, cooked ham',
          price: 13,
        }
      ]
    },
    {
      id: 1,
      name: 'Tanuki',
      logoImg: '../assets/restaurants/tanuki.jpg',
      rating: 4.8,
      meals: ['pizza', 'sushi'],
      averageOrderTime: '50 min',
      minMealPrice: 9,
      stock: [
        {
          id: 0,
          article: 'Eel Roll Standard',
          photo: '../assets/goods/image-001.jpg',
          ingredients: 'Rice, eel, unagi sauce, sesame, nori seaweed.',
          price: 9,
        },
        {
          id: 1, 
          article: 'California Salmon Standard',
          photo:'../assets/goods/image-002.jpg',
          ingredients: 'Rice, salmon, avocado, cucumber, mayonnaise, masago caviar, nori seaweed.',
          price: 12,
        },
        {
          id: 2, 
          article: 'Okinawa standard',
          photo:'../assets/goods/image-003.jpg',
          ingredients: 'Rice, boiled shrimp, cream cheese, salmon, fresh cucumber...',
          price: 15,
        },
        {
          id: 3, 
          article: 'Caesar XL',
          photo:'../assets/goods/image-004.jpg',
          ingredients: 'Rice, smoked chicken breast, masago caviar, tomato, iceberg, Caesar sauce...',
          price: 17,
        },
        {
          id: 4, 
          article: 'Yasai maki standard 185g',
          photo:'../assets/goods/image-005.jpg',
          ingredients: 'Rice, fresh tomato, paprika, avocado, cucumber, iceberg',
          price: 20,
        },
        {
          id: 5,
          article: 'Shrimp roll standard',
          photo:'../assets/goods/image-006.jpg',
          ingredients: 'Rice, nori seaweed, boiled shrimp, cream cheese, cucumbers',
          price: 25,
        },
      ]
    },
    {
      id: 2,
      name: 'FoodBand',
      logoImg: '../assets/restaurants/foodband.jpg',
      rating: 3.5,
      meals: ['pizza'],
      averageOrderTime: '55min',
      minMealPrice: 20,
      stock: [
        {
          id: 0,
          article: 'Pizza Margherita',
          photo: '',
          ingredients: 'Pizza dough, tomatoes, mozzarella',
          price: 20,
        },
        {
          id: 1,
          article: 'Proscutto di Fungi',
          photo:'../assets/goods/image-007.jpg',
          ingredients: 'Pizza dough, tomatoes, mozzarella, mushrooms, cooked ham',
          price: 33,
        }
      ]
    },
    {
      id: 3,
      name: 'Greedy Pizza',
      logoImg: '../assets/restaurants/greedy-pizza.jpg',
      rating: 5.5,
      meals: ['pizza'],
      averageOrderTime: '35 min',
      minMealPrice: 9,
      stock: [
        {
          article: 'Pizza Margherita',
          photo: '',
          ingredients: 'Pizza dough, tomatoes, mozzarella',
          price: 9,
        },
        {
          article: 'Proscutto di Fungi',
          photo:'../assets/goods/image-007.jpg',
          ingredients: 'Pizza dough, tomatoes, mozzarella, mushrooms, cooked ham',
          price: 13,
        }
      ]
    },
    {
      id: 4,
      name: 'Food Point',
      logoImg: '../assets/restaurants/foodpoint.jpg',
      rating: 3.2,
      meals: ['pizza'],
      averageOrderTime: '50 min',
      minMealPrice: 9,
      stock: [
        {
          id: 0,
          article: 'Pizza Margherita',
          photo: '',
          ingredients: 'Pizza dough, tomatoes, mozzarella',
          price: 9,
        },
        {
          id: 1,
          article: 'Proscutto di Fungi',
          photo:'../assets/goods/image-007.jpg',
          ingredients: 'Pizza dough, tomatoes, mozzarella, mushrooms, cooked ham',
          price: 13,
        }
      ]
    },
    {
      id: 5,
      name: 'Pizza Burger',
      logoImg: '../assets/restaurants/pizzaburger.jpg',
      rating: 2,
      meals: ['pizza'],
      averageOrderTime: '50 min',
      minMealPrice: 9,
      stock: []
    },
  ]
};
