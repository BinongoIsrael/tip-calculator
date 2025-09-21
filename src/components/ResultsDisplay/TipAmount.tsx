import React from "react";
import { formatCurrency } from "@/utils/calculations";

interface TipAmountProps {
  amount: number;
}

export const TipAmount: React.FC<TipAmountProps> = ({ amount }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="text-white text-sm font-bold">Tip Amount</div>
        <div className="text-grey-400 text-xs">/ person</div>
      </div>
      <div className="text-green-400 text-3xl font-bold">
        {formatCurrency(amount)}
      </div>
    </div>
  );
};
