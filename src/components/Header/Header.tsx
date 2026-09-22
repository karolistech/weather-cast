import SearchBar from "./SearchBar/SearchBar";
import SettingsMenu from "./SettingsMenu/SettingsMenu";

export default function Header() {
  return (
    <div className="header">
      <SearchBar />
      <SettingsMenu />
    </div>
  );
}
