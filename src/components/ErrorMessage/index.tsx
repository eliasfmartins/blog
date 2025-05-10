import clsx from "clsx";
type ErrorMessageProps = {

  pageTitle: string
  contentTytle: string
  content: React.ReactNode
}

export function ErrorMessage({ pageTitle, content, contentTytle }: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div className={clsx("min-h-[320px] bg-slate-900 text-slate-100", 'mb-16 p-8 rounded-xl', 'flex items-center justify-center', 'text-center')}>
        <div>
          <h1 className="text-7xl/tight mb-5 font-extrabold ">{contentTytle}</h1>
          <div>{content}</div>
        </div>
      </div></>
  );
}
