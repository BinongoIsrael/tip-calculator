import React, { useState, useEffect } from "react";
import { Input } from "./UI/Input";

interface PeopleInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const PeopleInput: React.FC<PeopleInputProps> = ({
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (value === 0 && !hasInteracted) {
      setInputValue("");
    } else if (value > 0) {
      setInputValue(value.toString());
    }
  }, [value, hasInteracted]);

  const handleChange = (newInputValue: string) => {
    setInputValue(newInputValue);
    setHasInteracted(true);

    const numericValue = parseInt(newInputValue) || 0;
    onChange(numericValue);
  };

  const showError = hasInteracted && inputValue === "0";

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="block text-grey-500 text-sm font-bold">
          Number of People
        </label>
        {showError && (
          <span className="text-red-500 text-xs font-bold">Can't be zero</span>
        )}
      </div>
      <Input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="0"
        min="1"
        step="1"
        icon={
          <img
            src="/images/icon-person.svg"
            alt="Person icon"
            className="w-3 h-4"
          />
        }
        className={`pl-12 ${
          showError ? "border-red-500 focus:border-red-500" : ""
        }`}
      />
    </div>
  );
};
