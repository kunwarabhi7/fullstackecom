import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggler";
import Image from "next/image";
import Logo from "@/public/amazon.png";
import { ShoppingCart } from "lucide-react";
import ShoppingCartCom from "./ShoppingCartCom";
const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="amazonLogo" className="dark:invert w-24 h-16" />
      </Link>

      <Link href="/product">
        <h1>Product</h1>
      </Link>
      <DarkModeToggle />
      <ShoppingCart />
      <ShoppingCartCom />
    </header>
  );
};

export default Header;
