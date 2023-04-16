import { Product } from "@/queries";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  onClick?: () => void;
  product: Product;
  href: string;
  testId?: string;
};

export const ProductCard: FC<Props> = ({ product, onClick, href, testId }) => {
  return (
    <div
      className="flex h-full cursor-pointer flex-col  space-y-4 rounded-lg border-2 bg-white p-4 shadow-lg"
      onClick={onClick}
      data-testid={testId}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          className="object-contain"
          fill
          alt={product.title}
        />
      </div>
      <hr />

      <h2 className="grow text-lg font-bold">
        <Link href={href}>{product.title}</Link>
      </h2>
      <div className="flex justify-between">
        <div className="font-bold text-slate-500">Price: ${product.price}</div>
      </div>
    </div>
  );
};
