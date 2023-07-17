class IProduct {
  constructor(
    productId,
    name,
    price,
    quantity,
    sku,
    faceImage,
    images,
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
    this.faceImage = faceImage;
    this.images = images;
    this.description = description;
    this.category = category;
    this.avgReviewRate = avgReviewRate;
    this.totalReviews = totalReviews;
  }
}

export default IProduct;
