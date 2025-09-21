import React from "react";
import { formatCurrency } from "@/utils/calculations";

interface TotalAmountProps {
  amount: number;
}

export const TotalAmount: React.FC<TotalAmountProps> = ({ amount }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="text-white text-sm font-bold">Total</div>
        <div className="text-grey-400 text-xs">/ person</div>
      </div>
      <div className="text-green-400 text-3xl font-bold">
        {formatCurrency(amount)}
      </div>
    </div>
  );
};
