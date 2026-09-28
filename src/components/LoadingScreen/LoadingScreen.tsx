import "./LoadingScreen.css";
import loadingIcon from "@/assets/icons/weather-icons/day-clear.svg";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={loadingIcon} alt="Loading screen icon" className="loading-screen__icon" />

      <p className="loading-screen__text">Loading weather, please wait...</p>
    </div>
  );
}
