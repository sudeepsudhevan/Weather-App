import React from 'react';
import { Droplets, Wind, Thermometer } from 'lucide-react';

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const { name, main, weather, wind } = data;
    const temp = Math.round(main.temp);
    const description = weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-2xl text-white animate-fade-in-up">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold tracking-wide">{name}</h2>
                <p className="text-lg text-blue-100 capitalize mt-1">{description}</p>

                <div className="flex items-center justify-center my-6">
                    <img src={icon} alt={description} className="w-32 h-32 drop-shadow-2xl" />
                    <span className="text-8xl font-thin ml-2">{temp}°</span>
                </div>

                <div className="w-full grid grid-cols-3 gap-4 mt-6">
                    <div className="flex flex-col items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                        <Droplets size={24} className="text-blue-300 mb-2" />
                        <span className="font-semibold text-xl">{main.humidity}%</span>
                        <span className="text-xs text-blue-200">Humidity</span>
                    </div>
                    <div className="flex flex-col items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                        <Wind size={24} className="text-blue-300 mb-2" />
                        <span className="font-semibold text-xl">{wind.speed}</span>
                        <span className="text-xs text-blue-200">Wind (m/s)</span>
                    </div>
                    <div className="flex flex-col items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                        <Thermometer size={24} className="text-blue-300 mb-2" />
                        <span className="font-semibold text-xl">{Math.round(main.feels_like)}°</span>
                        <span className="text-xs text-blue-200">Feels Like</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
