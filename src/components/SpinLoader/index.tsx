import clsx from "clsx";


type SpinLoaderProps = {
  className?: string;
}


export const SpinLoader = ({ className = '' }: SpinLoaderProps) => {
  const classes = clsx('flex', 'items-center', 'justify-center', className);
  return (
    <div>
      <h1 className={classes} >
        <div className={clsx('w-10 h-10 ', 'border-5 border-t-transparent border-slate-900', 'rounded-full', 'animate-spin')}></div>
      </h1>
    </div>
  );
}
