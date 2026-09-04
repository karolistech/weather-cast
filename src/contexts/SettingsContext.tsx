import { type ReactNode, createContext, useContext, useState } from "react";

import { TempUnit } from "@/types/tempUnit";

type SettingsContext = {
  tempUnit: TempUnit;
  toggleTempUnit: () => void;
};

const SettingsContext = createContext<SettingsContext | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [tempUnit, setTempUnit] = useState<TempUnit>("celsius");

  function toggleTempUnit() {
    setTempUnit(tempUnit => tempUnit === "celsius" ? "fahrenheit" : "celsius");
  }

  return (
    <SettingsContext value={{ tempUnit, toggleTempUnit }}>
      {children}
    </SettingsContext>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (context === null) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
}
