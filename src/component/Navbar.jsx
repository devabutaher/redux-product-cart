import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    // <!-- Navbar -->
    <nav class="bg-[#171C2A] py-4">
      <div class="navBar">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="LWS"
            class="max-w-[140px]"
            width={200}
            height={200}
          />
        </Link>

        <div class="flex gap-4">
          <Link href="/" class="navHome" id="lws-home">
            Home
          </Link>
          <Link href="/cart" class="navCart" id="lws-cart">
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
