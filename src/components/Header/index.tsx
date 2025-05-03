import clsx from "clsx";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <h1 className={clsx(
        'text-4xl/normal font-extrabold text-center py-8',
        'sm:text-5xl/normal sm:py-10',
        'md:text-6xl/normal sm:py-11',
        'lg:text-7xl/normal sm:py-12'
      )}>
        <Link href="/" >
          My Blog
        </Link>
      </h1>
    </header>
  );
}
