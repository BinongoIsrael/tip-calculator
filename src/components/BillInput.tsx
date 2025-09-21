import React, { useState, useEffect } from "react";
import { Input } from "./UI/Input";

interface BillInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const BillInput: React.FC<BillInputProps> = ({ value, onChange }) => {
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

    const numericValue = parseFloat(newInputValue) || 0;
    onChange(numericValue);
  };

  const showError = hasInteracted && inputValue === "0";

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="block text-grey-500 text-sm font-bold">Bill</label>
        {showError && (
          <span className="text-red-500 text-xs font-bold">Can't be zero</span>
        )}
      </div>
      <Input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="0"
        min="0"
        step="0.01"
        icon={
          <img
            src="/images/icon-dollar.svg"
            alt="Dollar icon"
            className="w-3 h-4"
          />
        }
        className={showError ? "border-red-500 focus:border-red-500" : ""}
      />
    </div>
  );
};
