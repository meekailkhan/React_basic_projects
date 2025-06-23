type NavLinkProps = {
  title: string;
  className?: string;
  isNested?: boolean;
  onClick: () => void;
};

function NavLink({
  title,
  className,
  isNested = false,
  onClick,
}: NavLinkProps) {

  if (isNested) {
    return (
      <div
        onClick={onClick}
        className={`block rounded-lg  px-4 text-start py-2 transition-all w-[100%] duration-300 hover:bg-yellow-500 hover:text-white  `}
      >
        {title}
      </div>
    );
  } else {
    return (
      <div
        className={`w-max group inline-block relative transform transition-[padding,background-color] ${className}`}
        onClick={onClick}
      >
        <span
          className={`md:text-[clamp(0.5rem,1.5vw,1rem)] text-xl font-medium text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-300 hover:text-yellow-300 after:transition-all after:duration-300 group-hover:after:w-full px-2 pb-1 `}
        >
          {title}
        </span>
      </div>
    );
  }
}

export default NavLink;
