import { useState } from "react";

import { useSettings } from "@/contexts/SettingsContext";

import "./SettingsMenu.css";
import uiIcons from "@/assets/icons/ui-icons/ui-icons.svg";

export default function SettingsMenu() {
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const { tempUnit, toggleTempUnit } = useSettings();

  function toggleSettingsMenu() {
    setSettingsMenuOpen(open => !open);
  }

  return (
    <div className="settings-menu">
      <button className="settings-menu__button" onClick={toggleSettingsMenu}>
        <svg className="settings-menu__icon">
          <use href={`${uiIcons}#settings`} />
        </svg>
      </button>

      {settingsMenuOpen && (
        <div className="settings-menu__settings">
          <button className="settings-menu__setting-button" onClick={toggleTempUnit}>
            <svg className="settings-menu__setting-icon">
              <use href={`${uiIcons}#thermometer`} />
            </svg>

            <span className="settings-menu__setting-label">
              {tempUnit === "celsius" ? "Celsius" : "Fahrenheit"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
