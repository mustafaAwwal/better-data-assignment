import Link from "next/link";
import { FC } from "react";
import { List } from "react-content-loader";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useListProductCategoriesQuery } from "../../queries/products";

type Props = {
  open?: boolean;
  onClose?: () => void;
};

export const SideNav: FC<Props> = ({ open, onClose }) => {
  const { data, isLoading } = useListProductCategoriesQuery();
  const display = open ? "block" : "hidden";
  return (
    <aside
      className={`${display} fixed z-50 h-full w-full bg-black bg-opacity-50 shadow-lg lg:relative lg:block lg:w-min  lg:border-e-2 lg:bg-white`}
      onClick={onClose}
    >
      <nav
        className={`${display} absolute h-full w-56 border-e-2 bg-white px-4 pb-4 placeholder-blue-400 lg:sticky lg:top-0 lg:block lg:h-auto lg:border-e-0`}
      >
        <div className="flex h-16 items-center justify-between">
          <h2 className="font-bold">Store</h2>
          <button
            className="lg:hidden"
            aria-label="close side nav"
            onClick={onClose}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
        <hr className="mb-4" />
        {isLoading && <List />}
        {data && (
          <ul role="list" className="space-y-4">
            <li className="lg:hidden">
              <Link href="/">Home</Link>
            </li>
            <li className="lg:hidden">
              <Link href="/products">Products</Link>
            </li>
            {data.map((category) => (
              <li key={category} className="capitalize">
                <Link href={`/products/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
};
