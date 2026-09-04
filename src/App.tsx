import { LocationsProvider, useLocations } from "./contexts/LocationsContext";

import "./App.css";

export default function App() {
  return (
    <LocationsProvider>
      <AppContent />
    </LocationsProvider>
  );
}

function AppContent() {
  const { locations } = useLocations();

  return (
    <div className="app">
    </div>
  );
}
