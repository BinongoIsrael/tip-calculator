export const calculateTip = (
  bill: number,
  tipPercentage: number,
  numberOfPeople: number
): { tipAmount: number; total: number } => {
  if (bill <= 0 || numberOfPeople <= 0) {
    return { tipAmount: 0, total: 0 }
  }

  const tipAmount = (bill * (tipPercentage / 100)) / numberOfPeople
  const total = (bill + bill * (tipPercentage / 100)) / numberOfPeople

  return {
    tipAmount: Math.round(tipAmount * 100) / 100,
    total: Math.round(total * 100) / 100,
  }
}

export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`
}