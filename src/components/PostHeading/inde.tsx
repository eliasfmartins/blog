import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
}


export function PostHeading({ children, url, as: Tag = 'h2' }: PostHeadingProps) {

  const headingClassesMap = {
    h1: 'text-2xl/tight font-extrabold sm:text-4xl',
    h2: 'text-xl/tight font-bold sm:text-3xl bg-red-500',
  }
  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link href={url} children={children} />
    </Tag>
  )
}
