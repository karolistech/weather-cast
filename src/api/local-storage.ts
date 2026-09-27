import type { StoredLocations } from "@/types/locations";
import type { TempUnit } from "@/types/tempUnit";
import type { Theme } from "@/types/theme";

const keys = {
  locations: "locations",
  tempUnit: "tempUnit",
  theme: "theme"
};

export const storage = {
  setLocations(locations: StoredLocations) {
    localStorage.setItem(keys.locations, JSON.stringify(locations));
  },

  getLocations(): StoredLocations | null {
    const value = localStorage.getItem(keys.locations);

    return value === null ? null : JSON.parse(value);
  },

  setTempUnit(tempUnit: TempUnit) {
    localStorage.setItem(keys.tempUnit, tempUnit);
  },

  getTempUnit(): TempUnit | null {
    const value = localStorage.getItem(keys.tempUnit);

    return value === "celsius" || value === "fahrenheit" ? value : null;
  },

  setTheme(theme: Theme) {
    localStorage.setItem(keys.theme, theme);
  },

  getTheme(): Theme | null {
    const value = localStorage.getItem(keys.theme);

    return value === "light" || value === "dark" ? value : null;
  }
};
