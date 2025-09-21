"use client";

import { BillInput } from "@/components/BillInput";
import { TipSelector } from "@/components/TipSelector/TipSelector";
import { PeopleInput } from "@/components/PeopleInput";
import { Results } from "@/components/ResultsDisplay/Results";
import { useTipCalculator } from "@/hooks/useTipCalculator";

export default function Home() {
  const {
    state,
    result,
    setBill,
    setTipPercentage,
    setCustomTip,
    setNumberOfPeople,
    reset,
    canReset,
  } = useTipCalculator();

  return (
    <div className="min-h-screen bg-grey-200 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-green-900 text-xl md:text-2xl font-bold tracking-wider leading-tight">
          SPLI
          <br />
          TTER
        </h1>
      </div>

      <div className="w-full max-w-sm md:max-w-4xl bg-white rounded-t-3xl md:rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="block md:hidden space-y-6">
            <BillInput value={state.bill} onChange={setBill} />

            <TipSelector
              selectedPercentage={state.tipPercentage}
              customTip={state.customTip}
              isCustomActive={state.isCustomTipActive}
              onPercentageSelect={setTipPercentage}
              onCustomTipChange={setCustomTip}
            />

            <PeopleInput
              value={state.numberOfPeople}
              onChange={setNumberOfPeople}
            />

            <Results result={result} onReset={reset} canReset={canReset} />
          </div>

          <div className="hidden md:grid md:grid-cols-2 md:gap-8">
            <div className="space-y-8">
              <BillInput value={state.bill} onChange={setBill} />

              <TipSelector
                selectedPercentage={state.tipPercentage}
                customTip={state.customTip}
                isCustomActive={state.isCustomTipActive}
                onPercentageSelect={setTipPercentage}
                onCustomTipChange={setCustomTip}
              />

              <PeopleInput
                value={state.numberOfPeople}
                onChange={setNumberOfPeople}
              />
            </div>

            <div className="flex items-stretch">
              <div className="w-full">
                <Results result={result} onReset={reset} canReset={canReset} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
