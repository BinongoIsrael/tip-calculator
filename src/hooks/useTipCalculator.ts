import { useState, useCallback } from 'react'
import type { TipCalculatorState, CalculationResult, TipPercentage } from '@/types'
import { calculateTip } from '@/utils/calculations'

export const useTipCalculator = () => {
  const [state, setState] = useState<TipCalculatorState>({
    bill: 0,
    tipPercentage: 0,
    customTip: '',
    numberOfPeople: 0,
    isCustomTipActive: false,
  })

  const setBill = useCallback((bill: number) => {
    setState(prev => ({ ...prev, bill }))
  }, [])

   const setTipPercentage = useCallback((percentage: TipPercentage) => {
    setState(prev => {
      // If clicking the same percentage button, toggle it off
      if (prev.tipPercentage === percentage && !prev.isCustomTipActive) {
        return {
          ...prev,
          tipPercentage: 0,
          isCustomTipActive: false,
          customTip: ''
        }
      }
      
      // Otherwise, select the new percentage
      return {
        ...prev, 
        tipPercentage: percentage, 
        isCustomTipActive: false,
        customTip: '' 
      }
    })
  }, [])

  const setCustomTip = useCallback((customTip: string) => {
    const percentage = parseFloat(customTip) || 0
    setState(prev => ({ 
      ...prev, 
      customTip, 
      tipPercentage: percentage, 
      isCustomTipActive: true 
    }))
  }, [])

  const setNumberOfPeople = useCallback((numberOfPeople: number) => {
    setState(prev => ({ ...prev, numberOfPeople }))
  }, [])

  const reset = useCallback(() => {
    setState({
      bill: 0,
      tipPercentage: 0,
      customTip: '',
      numberOfPeople: 0,
      isCustomTipActive: false,
    })
  }, [])

  const result: CalculationResult = calculateTip(
    state.bill,
    state.tipPercentage,
    state.numberOfPeople
  )

  const canReset = state.bill > 0 || state.tipPercentage > 0 || state.numberOfPeople > 0

  return {
    state,
    result,
    setBill,
    setTipPercentage,
    setCustomTip,
    setNumberOfPeople,
    reset,
    canReset,
  }
}