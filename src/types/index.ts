export interface TipCalculatorState {
  bill: number
  tipPercentage: number
  customTip: string
  numberOfPeople: number
  isCustomTipActive: boolean
}

export interface CalculationResult {
  tipAmount: number
  total: number
}

export type TipPercentage = 5 | 10 | 15 | 25 | 50