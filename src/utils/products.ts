import { Product } from "@/queries";

export const filterBySearch = (products: Product[], search?: string) => {
  if (search) {
    const searchRegex = new RegExp(search, "i");
    return products.filter(({ title }) => searchRegex.test(title));
  }
  return products;
};
