class IProduct {
  constructor(
    productId,
    name,
    price,
    quantity,
    sku,
    image,
    description,
    category
  ) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.sku = sku;
    this.image = image;
    this.description = description;
    this.category = category;
  }
}

export default IProduct;
