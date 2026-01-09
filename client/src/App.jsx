import React, { useState } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Could not fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl font-bold mb-10 drop-shadow-md tracking-tighter">Weather.io</h1>

      <form onSubmit={fetchWeather} className="relative w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
        >
          <Search className="text-white" size={24} />
        </button>
      </form>

      {loading && <div className="text-xl animate-pulse">Searching sky...</div>}

      {error && (
        <div className="bg-red-500/20 backdrop-blur-md text-white px-6 py-4 rounded-xl border border-red-400/50 shadow-lg">
          {error}
        </div>
      )}

      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
