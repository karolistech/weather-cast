const icons = import.meta.glob<string>("@/assets/icons/weather-icons/*.svg", {
  import: "default",
  eager: true
});

export function getWeatherIcon(name: string): string {
  const key = Object.keys(icons).find(key => key.endsWith(`/weather-icons/${name}.svg`));

  if (key === undefined) {
    throw new Error(`Weather icon "${name}" was not found`);
  }

  return icons[key];
}
