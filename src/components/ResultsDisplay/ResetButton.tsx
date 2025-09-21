import React from "react";
import { Button } from "../UI/Button";

interface ResetButtonProps {
  onReset: () => void;
  disabled: boolean;
}

export const ResetButton: React.FC<ResetButtonProps> = ({
  onReset,
  disabled,
}) => {
  return (
    <Button
      onClick={onReset}
      disabled={disabled}
      variant="primary"
      className="reset-button"
    >
      RESET
    </Button>
  );
};
