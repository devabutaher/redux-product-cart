import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    // <!-- Navbar -->
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="LWS"
            className="max-w-[140px]"
            width={200}
            height={200}
          />
        </Link>

        <div className="flex gap-4">
          <Link href="/" className="navHome" id="lws-home">
            Home
          </Link>
          <Link href="/cart" className="navCart" id="lws-cart">
            <FaShoppingBag size={20} />
            <span id="lws-totalCart">0</span>
          </Link>
        </div>
      </div>
    </nav>
    //   <!-- Navbar ends -->
  );
};

export default Navbar;
