import type { Location } from "@/types/locations";
import type { TempUnit } from "@/types/tempUnit";

type WeatherResponse = {
  timezone: string;

  current_units: {
    temperature_2m: string;
  };

  current: {
    time: string;
    weather_code: number;
    is_day: number;
    temperature_2m: number;
    apparent_temperature: number;
    precipitation_probability: number;
    relative_humidity_2m: number;
    cloud_cover: number;
    uv_index: number;
    wind_speed_10m: number;
    surface_pressure: number;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
  };

  daily: {
    time: string[];
    sunrise: string[];
    sunset: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
};

const baseUrl = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeather(location: Location, tempUnit: TempUnit) {
  const params = new URLSearchParams();

  params.set("latitude", String(location.lat));
  params.set("longitude", String(location.lon));

  params.set("timezone", "auto");
  params.set("temperature_unit", tempUnit);
  params.set("wind_speed_unit", "ms");

  params.set("current", [
    "weather_code", "is_day", "temperature_2m", "apparent_temperature",
    "precipitation_probability", "relative_humidity_2m", "cloud_cover", "uv_index",
    "wind_speed_10m", "surface_pressure"
  ].join(","));

  params.set("hourly", ["temperature_2m", "precipitation_probability"].join(","));

  params.set("daily", [
    "sunrise", "sunset", "weather_code", "temperature_2m_max", "temperature_2m_min",
    "precipitation_probability_max"
  ].join(","));

  const response = await fetch(`${baseUrl}?${params}`);

  if (!response.ok) {
    throw new Error(`Weather request failed with the status code ${response.status}`);
  }

  const data: WeatherResponse = await response.json();
}
