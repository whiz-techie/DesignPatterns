class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ProductFactory {
    createProduct(name, price) {
      return new Product(name, price);
    }
  }
  
  const factory = new ProductFactory();
  const product1 = factory.createProduct('Widget', 10.99);
  const product2 = factory.createProduct('Gadget', 29.99);

  //The Factory pattern defines an interface for creating an object but allows subclasses to alter the type of objects that will be created.