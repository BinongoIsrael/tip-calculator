interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "tip" | "tip-active";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return disabled
          ? "bg-grey-200 text-green-90/80 cursor-not-allowed"
          : "bg-green-400 text-green-900 hover:bg-green-400/80 cursor-pointer";
      case "tip":
        return "bg-green-900 text-white hover:bg-(--color-grey-200) hover:text-green-900 cursor-pointer";
      case "tip-active":
        return "bg-green-400 text-green-900";
      default:
        return "bg-green-900 text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-bold text-[24px] py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${getVariantClasses()} ${className}`}
    >
      {children}
    </button>
  );
};
