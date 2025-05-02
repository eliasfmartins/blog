import clsx from "clsx";

export const Header = () => {
  return (
    <div>
      <h1 className={clsx(
        'text-6xl',
        'font-bold',
        'text-center',
        'text-gray-500',
        'animate-spin',
        'transition-all',
        'duration-1000',
        'ease-in-out',
        'transform',
        'hover:scale-110',
        'hover:text-gray-700',
        'hover:rotate-12',
        'hover:transition-all',
        'hover:duration-500',
      )}  >teste</h1>
    </div>
  );
}
