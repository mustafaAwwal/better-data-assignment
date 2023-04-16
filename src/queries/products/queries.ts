import { useQuery } from "@tanstack/react-query";
import { storeAxios } from "../store-axios";
import { QueryPropsHelper } from "../types";
import { Product } from "./types";

export const productKeys = {
  all: () => [{ scope: "products" }] as const,
  list: () => [{ ...productKeys.all()[0], type: "list" }] as const,
  getById: (id: string) => [{ ...productKeys.all()[0], id }] as const,
  listCategories: () =>
    [{ ...productKeys.all()[0], type: "categories" }] as const,
  listByCategory: (category: string) =>
    [{ ...productKeys.all()[0], type: "list", category }] as const,
};

type QueryProps<T extends keyof typeof productKeys> = QueryPropsHelper<
  typeof productKeys,
  T
>;

export const listAllProducts = async () =>
  (await storeAxios.get<Product[]>("/products")).data;

export const useListAllProductsQuery = () =>
  useQuery({ queryKey: productKeys.list(), queryFn: listAllProducts });

export const listProductsByCategory = async ({
  queryKey: [{ category }],
}: QueryProps<"listByCategory">) =>
  (await storeAxios.get<Product[]>(`/products/category/${category}`)).data;

export const useListProductsByCategoryQuery = (category: string) =>
  useQuery({
    queryKey: productKeys.listByCategory(category),
    queryFn: listProductsByCategory,
  });

export const getProductById = async ({
  queryKey: [{ id }],
}: QueryProps<"getById">) =>
  (await storeAxios.get<Product>(`/products/${id}`)).data;

export const useGetProductById = (id: string) =>
  useQuery({
    queryKey: productKeys.getById(id),
    queryFn: getProductById,
  });

export const listProductCategories = async () =>
  (await storeAxios.get<string[]>("/products/categories")).data;

export const useListProductCategoriesQuery = () =>
  useQuery({
    queryKey: productKeys.listCategories(),
    queryFn: listProductCategories,
  });
