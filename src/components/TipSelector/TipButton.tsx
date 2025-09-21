import React from "react";
import { Button } from "../UI/Button";
import type { TipPercentage } from "@/types";

interface TipButtonProps {
  percentage: TipPercentage;
  isActive: boolean;
  onClick: (percentage: TipPercentage) => void;
}

export const TipButton: React.FC<TipButtonProps> = ({
  percentage,
  isActive,
  onClick,
}) => {
  return (
    <Button
      onClick={() => onClick(percentage)}
      variant={isActive ? "tip-active" : "tip"}
    >
      {percentage}%
    </Button>
  );
};
