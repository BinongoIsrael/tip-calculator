import React from "react";
import { TipAmount } from "./TipAmount";
import { TotalAmount } from "./TotalAmount";
import { ResetButton } from "./ResetButton";
import type { CalculationResult } from "@/types";

interface ResultsProps {
  result: CalculationResult;
  onReset: () => void;
  canReset: boolean;
}

export const Results: React.FC<ResultsProps> = ({
  result,
  onReset,
  canReset,
}) => {
  return (
    <div className="bg-green-900 rounded-2xl px-10 py-10 w-full flex flex-col justify-between min-h-full">
      <div className="space-y-6 flex-grow flex flex-col">
        <TipAmount amount={result.tipAmount} />
        <TotalAmount amount={result.total} />
      </div>
      <div className="mt-6">
        <ResetButton onReset={onReset} disabled={!canReset} />
      </div>
    </div>
  );
};
