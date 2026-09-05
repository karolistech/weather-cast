import type { Weather } from "@/api/weather";

type WeatherProps = {
  weather: Weather;
  updateWeather: () => void;
};

export default function Weather({ weather, updateWeather }: WeatherProps) {
  return (
    <div className="weather">
    </div>
  );
}
