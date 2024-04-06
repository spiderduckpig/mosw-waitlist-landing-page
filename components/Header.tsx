import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";

const Header = () => {
  return (
    <header className="flex-col sm:flex-row flex justify-between items-start">
      <Image src={"/logo.svg"} width={180} height={60} alt={config.title} />
      <nav>
      </nav>
    </header>
  );
};

export default Header;
