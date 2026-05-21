import { useState, useEffect } from 'react';

const FALLBACK_DATA = {
  city: 'Bengaluru',
  temperature: 24,
  description: 'Partly cloudy',
};

const getWeatherDescription = (code) => {
  // Open-Meteo WMO weather interpretation codes
  if (code === 0) return 'Clear sky';
  if (code === 1 || code === 2 || code === 3) return 'Partly cloudy';
  if (code === 45 || code === 48) return 'Fog';
  if (code >= 51 && code <= 55) return 'Drizzle';
  if (code >= 61 && code <= 65) return 'Rain';
  if (code >= 71 && code <= 75) return 'Snow';
  if (code >= 80 && code <= 82) return 'Rain showers';
  if (code >= 95) return 'Thunderstorm';
  return 'Cloudy';
};

let weatherPromise = null;

export function useWeather() {
  const [data, setData] = useState(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    if (!weatherPromise) {
      weatherPromise = new Promise((resolve) => {
        if (!navigator.geolocation) {
          resolve(FALLBACK_DATA);
          return;
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              
              // Get city name using Nominatim
              const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
              const geoData = await geoRes.json();
              const city = geoData.address?.city || geoData.address?.town || geoData.address?.village || FALLBACK_DATA.city;

              // Get weather using Open-Meteo
              const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
              const weatherData = await weatherRes.json();

              resolve({
                city,
                temperature: Math.round(weatherData.current_weather.temperature),
                description: getWeatherDescription(weatherData.current_weather.weathercode),
              });
            } catch (error) {
              console.error("Failed to fetch weather data:", error);
              resolve(FALLBACK_DATA);
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            resolve(FALLBACK_DATA);
          }
        );
      });
    }

    weatherPromise.then((fetchedData) => {
      if (mounted) {
        setData(fetchedData);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return { ...data, loading };
}
