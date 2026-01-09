# Weather App Project Explanation

## Overview
This project is a full-stack weather application built with a **React** frontend and a **Node.js/Express** backend. It fetches real-time weather data from the **OpenWeatherMap API**.

## Architecture
The app follows a client-server architecture:

1.  **Frontend (Client)**: Built with React (Vite) and TailwindCSS. It handles the UI, user interactions (search), and displays weather data.
2.  **Backend (Server)**: A lightweight Node.js Express server. It acts as a **proxy** to the third-party API.
    *   **Why a proxy?** To securely store the API key on the server side (`.env`) and prevent exposing it to the client (browser).

## Key Features
-   **Search**: Users can search for any city.
-   **Live Data**: Displays temperature, humidity, wind speed, and weather conditions.
-   **Security**: API keys are hidden on the server.
-   **Error Handling**: Gracefully handles invalid city names or network errors.

## Technologies Used
-   **Frontend**: React, TailwindCSS, Axios, Lucide-React (Icons).
-   **Backend**: Node.js, Express, Dotenv, Cors.
-   **Development**: Vite (fast build tool).

## How it Works
1.  User enters a city name in the frontend.
2.  Frontend sends a GET request to `/api/weather?city=London`.
3.  Backend receives the request, appends the API Key, and calls OpenWeatherMap.
4.  Backend returns the JSON data to the Frontend.
5.  Frontend renders the data in a beautiful glassmorphism card.
