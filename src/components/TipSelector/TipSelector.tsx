import React from "react";
import { TipButton } from "./TipButton";
import { CustomInput } from "./CustomInput";
import type { TipPercentage } from "@/types";

interface TipSelectorProps {
  selectedPercentage: number;
  customTip: string;
  isCustomActive: boolean;
  onPercentageSelect: (percentage: TipPercentage) => void;
  onCustomTipChange: (value: string) => void;
}

const TIP_PERCENTAGES: TipPercentage[] = [5, 10, 15, 25, 50];

export const TipSelector: React.FC<TipSelectorProps> = ({
  selectedPercentage,
  customTip,
  isCustomActive,
  onPercentageSelect,
  onCustomTipChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-grey-500 text-sm font-bold">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {TIP_PERCENTAGES.map((percentage) => (
          <TipButton
            key={percentage}
            percentage={percentage}
            isActive={selectedPercentage === percentage && !isCustomActive}
            onClick={onPercentageSelect}
          />
        ))}
        <CustomInput value={customTip} onChange={onCustomTipChange} />
      </div>
    </div>
  );
};
