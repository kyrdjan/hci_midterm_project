export default function Button({ children, onClick, variant = "ghost", className = "" }) {

  const variants = {
    ghost: "text-lg bg-transparent text-[#490101] hover:text-white active:text-[#E74A4A] select-none",
    red: "text-lg bg-[#FF6F71]  text-white border-2  rounded-2xl px-14 py-3 shadow-[-5px_5px_0px_#F7C4C4] select-none",
    outline: "text-lg bg-white text-[#FF8315] border-2 border-[#FF8315] rounded-2xl px-14 py-3 shadow-[-5px_5px_0px_#F7C4C4] select-none"
  };


  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${className} `}
    >
      {children}
    </button>
  );
}
