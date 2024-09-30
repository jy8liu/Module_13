const { Product } = require('../models');
// This populates the product table
const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 16.99,
    stock: 114,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 120.0,
    stock: 250,
    category_id: 5,
  },
  {
    product_name: 'Trucker Hat',
    price: 21.99,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'New Taylor Swift Album',
    price: 10.99,
    stock: 150,
    category_id: 3,
  },
  {
    product_name: 'Hiking Pants',
    price: 39.99,
    stock: 122,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
