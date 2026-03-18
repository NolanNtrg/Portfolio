import { Icon } from "./Icon";

type ButtonProps = {
  title: string;
  href?: string;
  download?: string;
  full?: boolean;
  submit?: boolean;
  icon?: string;
  small?: boolean;
  onClick?: () => void;
  forceWhite?: boolean;
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
  forceWhite = false,
}: ButtonProps) {
  // Base structural classes independent of variant/size
  const baseClasses = "flex items-center justify-center gap-2 font-(family-name:--font-ibm) font-medium tracking-wide transition-all duration-300 ease-out select-none active:scale-[0.98]";

  // Size specific classes
  const sizeClasses = small 
    ? "px-3 py-1.5 text-xs rounded-md" 
    : "px-6 py-3 text-sm rounded-lg";

  // Outline text color: if forced to white (Navbar), use #e5e5e5 ALWAYS, otherwise adapt to theme.
  const outlineTextColor = forceWhite ? "text-[#e5e5e5]" : "text-(--color-text)";

  // Variant specific classes (Full vs Outline)
  const variantClasses = full
    ? "bg-white text-black hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:-translate-y-0.5" 
    : `bg-transparent ${outlineTextColor} border border-[#333] hover:border-green-400/50 hover:text-green-500 hover:bg-green-400/5 hover:-translate-y-0.5`;

  const combinedStyles = `${baseClasses} ${sizeClasses} ${variantClasses}`;

  if (href) {
    return (
      <a href={href} download={download} className={combinedStyles}>
        {icon && <Icon src={icon} />}
        {title}
      </a>
    );
  }

  return (
    <button
      type={submit ? "submit" : "button"}
      className={combinedStyles}
      onClick={onClick}
    >
      {icon && <Icon src={icon} />}
      {title}
    </button>
  );
}
