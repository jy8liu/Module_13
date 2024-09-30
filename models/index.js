// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

/* SET NULL on delete has been used to make data chunks re-usable rather than
deleting all related records i.e deleting a category will not delete all associated
products.*/

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  
  through:{
    model: ProductTag,
    unique: false
  },
  onDelete: 'SET NULL'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  
  through:{
    model: ProductTag,
    unique: false
  },
  onDelete: 'SET NULL'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
