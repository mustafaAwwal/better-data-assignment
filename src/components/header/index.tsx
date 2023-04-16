import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDebounce } from "../../hooks";
import { Input } from "../inputs";

type Props = {
  onHamburgerClick?: () => void;
};

export const Header: FC<Props> = ({ onHamburgerClick }) => {
  const {
    query: { search = "" },
    replace,
  } = useRouter();
  const debounce = useDebounce();
  return (
    <nav className="sticky top-0 z-40 flex h-16 w-full flex-row items-center bg-blue-500 shadow-lg ">
      <ul
        role="list"
        className="mx-auto flex w-full items-center px-4 font-bold text-white"
      >
        <li className="flex items-center lg:hidden">
          <button onClick={onHamburgerClick} aria-label="side menu toggle">
            <GiHamburgerMenu color="white" />
          </button>
        </li>

        <li className="ml-2  hidden lg:block">
          <Link href={"/"}>Home</Link>
        </li>

        <li className="ml-2 hidden lg:block">
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
