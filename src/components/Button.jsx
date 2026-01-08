export const Button = ({ children, white = false, className = "" }) => {
  const baseStyles =
    "px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg hover:opacity-80";
  const variants = white
    ? "bg-white text-bright-orange"
    : "bg-bright-orange text-white";

  return (
    <button className={`${baseStyles} ${variants} ${className}`}>
      {children}
    </button>
  );
};
