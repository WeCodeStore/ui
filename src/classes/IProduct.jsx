class IProduct {
  constructor(
    productId,
    name,
    price,
    quantity,
    sku,
    image,
    description,
    category,
    avgReviewRate,
    totalReviews
  ) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.sku = sku;
    this.image = image;
    this.description = description;
    this.category = category;
    this.avgReviewRate = avgReviewRate;
    this.totalReviews = totalReviews;
  }
}

export default IProduct;
