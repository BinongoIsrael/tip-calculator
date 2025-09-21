import React from "react";
import { Input } from "../UI/Input";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <Input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Custom"
      className="custom-input cursor-pointer"
      min="0"
    />
  );
};
