import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const { pathname } = useRouter();

  return (
    <div
      className="flex items-center justify-between px-3 py-2 text-white lg:px-20"
      style={{ height: "10vh" }}
    >
      <a>
        <Link href="/">
          <div className="flex items-center space-x-4 cursor-pointer">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="object-contain w-12 h-12"
            />
            <div className="hidden md:block">
              <p>Father, Husband and Teacher</p>
              <p>Save Mr. White</p>
            </div>
          </div>
        </Link>
      </a>

      <div className="flex space-x-6 text-base uppercase md:text-xl">
        <a className={pathname === "/donate" ? "text-yellow" : ""}>
          <Link href="/donate">Donate</Link>
        </a>
        <a className={pathname === "/stats" ? "text-yellow" : ""}>
          <Link href="/donate">Stats</Link>
        </a>
        <a className={pathname === "/family" ? "text-yellow" : ""}>
          <Link href="/donate">Family</Link>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
