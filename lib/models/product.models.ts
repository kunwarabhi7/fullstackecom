export type Product = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  banner: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  rating: number;
  numReview: number;
  countInStock: number;
  colors?: [];
  sizes?: [];
};
