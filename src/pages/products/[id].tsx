import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MainLayout } from "../../layouts";
import {
  getProductById,
  listAllProducts,
  productKeys,
  useGetProductById,
} from "../../queries";

const Product = () => {
  const { id } = useRouter().query;
  const { data: product } = useGetProductById(id as string);

  return (
    <MainLayout>
      <div className="container mx-auto md:grid md:grid-cols-3">
        {product && (
          <>
            <div className="p-4 shadow-lg">
              <div className="relative aspect-square max-h-96 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="object-contain"
                  fill
                />
              </div>
            </div>
            <div className="col-span-2 space-y-4 p-4">
              <h1 className="text-xl font-bold">{product.title}</h1>
              <hr />
              <p>{product.description}</p>
              <div className="font-bold">
                Rating: {product.rating.rate}{" "}
                <span className="text-slate-500">/ 5</span> (total reviews:{" "}
                {product.rating.count}){" "}
              </div>
              <div className="text-xl font-bold text-slate-500">
                Price: ${product.price}
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await listAllProducts()).map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async ({
  params,
}) => {
  const client = new QueryClient();
  if (params?.id)
    await client.prefetchQuery({
      queryKey: productKeys.getById(params.id),
      queryFn: getProductById,
    });
  return { props: { dehydratedState: dehydrate(client) } };
};
