import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white mx-20 my-20 p-12 rounded">
      <header className="flex justify-between items-center px-12">
        <Image src={"/logo.svg"} width={227} height={40} alt={config.title} />
        <nav>
          <ul className="flex items-center gap-7 font-medium text-lg">
            <li className="text-black">
              <Link href={config.socials.twitter} passHref legacyBehavior>
                <a
                  className="px-5 py-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </Link>
            </li>
            <li className="bg-activeButton text-white rounded py-2">
              <Link href={config.subscribeForm} passHref legacyBehavior>
                <a
                  className="px-5 py-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
