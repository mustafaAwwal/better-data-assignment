import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { Input, ProductCard } from "../../../components";
import { useDebounce } from "../../../hooks";
import { MainLayout } from "../../../layouts";
import { useListProductsByCategoryQuery } from "../../../queries";
import { filterBySearch } from "../../../utils";

const ProductsByCategory = () => {
  const { query, replace, push } = useRouter();

  const { category, searchInCategory } = query;
  const { data: products } = useListProductsByCategoryQuery(category as string);

  const filteredProducts = useMemo(
    () => products && filterBySearch(products, searchInCategory as string),
    [products, searchInCategory]
  );
  const debounce = useDebounce();
  return (
    <MainLayout className="space-y-4 px-4 pb-4">
      <div className="flex items-center justify-between">
        <h1 className="grow text-lg font-bold capitalize">{category}</h1>
        <Input
          placeholder={`Search in ${category}`}
          className="mx-auto block"
          aria-label={`Search in ${category}`}
          defaultValue={searchInCategory}
          onChange={(e) =>
            debounce(() =>
              replace({ query: { searchInCategory: e.target.value, category } })
            )
          }
        />
      </div>
      <hr />
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts?.map((product) => (
          <li key={product.id}>
            <ProductCard
              testId={`product-card-${product.id}`}
              key={product.id}
              product={product}
              onClick={() => push(`/products/${product.id}`)}
              href={`/products/${product.id}`}
            />
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default ProductsByCategory;
