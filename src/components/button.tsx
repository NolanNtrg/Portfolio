export function Button({
  title,
  full = false,
  submit = false,
}: {
  title: string;
  full?: boolean;
  submit?: boolean;
}) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`px-6 py-3 font-ibm font-semibold no-underline border-2 rounded-sm transition-all duration-300 ease-in-out text-[0.9rem] flex items-center gap-2 
      ${full ? "bg-white text-black hover:bg-green-600 border-none" : "bg-transparent text-white border-white hover:text-black hover:bg-white"}
      transition-all duration-300 ease-in-out hover:-translate-y-0.75 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]`}
      onClick={() => alert("YES")}
    >
      {title}
    </button>
  );
}
