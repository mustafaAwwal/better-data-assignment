import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { ProductCard } from "../../components";
import { MainLayout } from "../../layouts";
import {
  listAllProducts,
  productKeys,
  useListAllProductsQuery,
} from "../../queries";
import { filterBySearch } from "../../utils";

const Products = () => {
  const { data: products } = useListAllProductsQuery();
  const { query, push } = useRouter();
  const { search } = query;
  const filteredProducts = useMemo(
    () => products && filterBySearch(products, search as string),
    [products, search]
  );
  return (
    <MainLayout className="space-y-4">
      <h1 className="text-xl font-bold">Products</h1>
      <hr />
      <ul
        role="list"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
      >
        {filteredProducts?.map((product) => (
          <li key={product.id}>
            <ProductCard
              testId={`product-card-${product.id}`}
              href={`/products/${product.id}`}
              product={product}
              onClick={() => push(`/products/${product.id}`)}
            />
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const client = new QueryClient();
  await client.prefetchQuery({
    queryKey: productKeys.list(),
    queryFn: listAllProducts,
  });
  return { props: { dehydratedState: dehydrate(client) } };
};
