import { LocationsProvider, useLocations } from "./contexts/LocationsContext";
import { SettingsProvider, useSettings } from "./contexts/SettingsContext";

import "./App.css";

export default function App() {
  return (
    <LocationsProvider>
      <SettingsProvider>
        <AppContent />
      </SettingsProvider>
    </LocationsProvider>
  );
}

function AppContent() {
  const { locations } = useLocations();
  const { tempUnit } = useSettings();

  return (
    <div className="app">
    </div>
  );
}
