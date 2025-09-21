import React from "react";

interface InputProps {
  type?: "number";
  value: number;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  min?: string;
  step?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  min,
  step,
  icon,
}) => {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grey-400 text-input font-bold">
          {icon}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`input-field ${icon ? "pl-8" : ""} ${className}`}
        min={min}
        step={step}
      />
    </div>
  );
};
