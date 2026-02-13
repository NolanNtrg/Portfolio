export function Button({
  title,
  full = false,
  submit = false,
  icon = "",
  small = false,
}: {
  title: string;
  full?: boolean;
  submit?: boolean;
  icon?: string;
  small?: boolean;
}) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`font-ibm font-semibold no-underline border-2 rounded-sm transition-all duration-300 ease-in-out flex items-center gap-2 cursor-pointer
      ${full ? "bg-(--background-color-items) text-(--color-text) hover:bg-(--green) border-none" : "bg-transparent text-(--background-color-items) border-(--background-color-items) hover:text-(--color-text) hover:bg-(--background-color-items)"}
      ${small ? "px-3 py-1.5 text-xs" : "px-6 py-3 text-[0.9rem]"}
      transition-all duration-300 ease-in-out hover:-translate-y-0.75 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]`}
      onClick={() => alert("YES")}
    >
      {icon && <span className={icon}></span>}
      {title}
    </button>
  );
}
