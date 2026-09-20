import { type ChangeEvent, useState } from "react";

import type { GeocodedLocation } from "@/types/locations";

import { fetchGeocodedLocations } from "@/api/geocoding";

import "./SearchBar.css";
import uiIcons from "@/assets/icons/ui-icons/ui-icons.svg";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState<GeocodedLocation[]>([]);

  async function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setQuery(value);

    try {
      const locations = await fetchGeocodedLocations(value);

      setLocations(locations);
    } catch (error) {
      console.error(error);
    }
  }

  function clearSearch() {
    setQuery("");
    setLocations([]);
  }

  return (
    <div className="search-bar">
      <svg className="search-bar__icon search-bar__icon--search">
        <use href={`${uiIcons}#search`} />
      </svg>

      <input
        type="search" className="search-bar__input" placeholder="Search for a location..."
        value={query} onChange={handleSearch}
      />

      {query !== "" && (
        <button className="search-bar__clear-button" onClick={clearSearch}>
          <svg className="search-bar__icon search-bar__icon--clear">
            <use href={`${uiIcons}#clear`} />
          </svg>
        </button>
      )}
    </div>
  );
}
