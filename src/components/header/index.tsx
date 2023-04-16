import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDebounce } from "../../hooks";
import { Input } from "../inputs";

type Props = {
  onToggle?: () => void;
};

export const Header: FC<Props> = ({ onToggle }) => {
  const {
    query: { search = "" },
    replace,
  } = useRouter();
  const debounce = useDebounce();
  return (
    <nav className="sticky top-0 z-40 flex h-16 w-full flex-row items-center bg-pink-600 shadow-lg ">
      <ul
        role="list"
        className="mx-auto flex w-full items-center px-4 font-bold text-white"
      >
        <li className="flex items-center lg:hidden">
          <button onClick={onToggle} aria-label="side menu toggle">
            <GiHamburgerMenu color="white" />
          </button>
        </li>

        <li className="ml-2 lg:ml-0">
          <Link href={"/"}>Home</Link>
        </li>

        <li className="ml-2">
          <Link href={"/products"}>Products</Link>
        </li>

        <li className="ml-2 flex grow justify-end">
          <Input
            type="text"
            placeholder="Search products"
            defaultValue={search}
            aria-label="search products"
            onChange={(e) =>
              debounce(() =>
                replace({
                  pathname: "/products",
                  query: { search: e.target.value },
                })
              )
            }
          />
        </li>
      </ul>
    </nav>
  );
};
