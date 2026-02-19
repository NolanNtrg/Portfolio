type ButtonProps = {
  title: string;
  href?: string;
  download?: string;
  full?: boolean;
  submit?: boolean;
  icon?: string;
  small?: boolean;
  onClick?: () => void;
  color?: "white" | "black";
};

export function Button({
  title,
  href,
  download,
  full = false,
  submit = false,
  icon = "",
  small = false,
  onClick,
  color,
}: ButtonProps) {
  const baseStyles = `
    font-ibm font-semibold no-underline border-2 rounded-sm transition-all duration-300 ease-in-out flex items-center gap-2 cursor-pointer
    ${color === "white" ? "bg-(#eaeaea)" : ""}  
    ${full ? "bg-(--background-color-items) text-(--color-text-contrasted) hover:bg-(--green) border-none" : "bg-transparent text-(--background-color-items) border-(--background-color-items) hover:text-(--color-text-contrasted) hover:bg-(--background-color-items)"}
    ${small ? "px-3 py-1.5 text-xs" : "px-6 py-3 text-[0.9rem]"} 
    transition-all duration-300 ease-in-out hover:-translate-y-0.75 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]}   
  `;

  if (href) {
    return (
      <a href={href} download={download} className={baseStyles}>
        {icon && <i className={`fa-solid ${icon}`}></i>}
        {title}
      </a>
    );
  }

  return (
    <button
      type={submit ? "submit" : "button"}
      className={baseStyles}
      onClick={onClick}
    >
      {icon && <i className={`fa-solid ${icon}`}></i>}
      {title}
    </button>
  );
}
