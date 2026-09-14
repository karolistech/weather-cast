import type { WeatherCurrent } from "@/types/weather";

import { getWeatherCondition, getWeatherIcon } from "@/components/Weather/weather-conditions";

import "./WeatherCurrent.css";
import uiIcons from "@/assets/icons/ui-icons/ui-icons.svg";

type WeatherCurrentProps = {
  current: WeatherCurrent;
};

export default function WeatherCurrent({ current }: WeatherCurrentProps) {
  const condition = getWeatherCondition(current.weatherCode, current.isDay);
  const icon = getWeatherIcon(condition.icon);

  return (
    <div className="weather-current">
      <div className="weather-current__summary">
        <img src={icon} alt={condition.description} className="weather-current__icon" />

        <div className="weather-current__summary-data">
          <span className="weather-current__temp">
            {current.temp} {current.tempUnit}
          </span>

          <p className="weather-current__condition">
            {condition.description}
          </p>
        </div>
      </div>
    </div>
  );
}
