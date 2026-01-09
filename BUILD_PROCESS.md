# Build Process / Development Journey

This document outlines the step-by-step process used to build the Weather App. You can use this to explain the "lifecycle" of your development during the interview.

## Step 1: Project Initialization & Scaffolding
**Goal:** Set up the workspace for a full-stack application.
1.  Created the root directory `Weather App`.
2.  Created two sub-directories:
    *   `server/` for the Node.js backend.
    *   `client/` for the React frontend.
3.  **Backend Init**: Ran `npm init -y` in `server/` to create `package.json`.
4.  **Frontend Init**: Ran `npm create vite@latest .` in `client/` to set up React + Vite.

## Step 2: Backend Implementation
**Goal:** Create a secure proxy for the OpenWeatherMap API.
1.  **Dependencies**: Installed `express`, `cors`, `dotenv`, and `axios`.
2.  **Server Setup (`server/index.js`)**:
    *   Initialized an Express app.
    *   Configured `cors()` middleware to allow the frontend to communicate with the backend.
3.  **API Route (`GET /api/weather`)**:
    *   Created a route that accepts a `city` query parameter.
    *   Used `axios` to fetch data from OpenWeatherMap using the API Key stored in `.env`.
    *   Forwarded the successful response or error back to the client.
4.  **Security**: Created `.env` usage to keep the `OPENWEATHER_API_KEY` hidden from the browser.

## Step 3: Frontend Implementation
**Goal:** Build the UI and connect it to the Backend.
1.  **Dependencies**: Installed `axios` (for API calls), `lucide-react` (for icons), and `tailwindcss` (for styling).
2.  **State Management (`App.jsx`)**:
    *   Used `useState` for `city` (input), `weather` (data), and `error` (UI feedback).
3.  **Components**:
    *   Created `WeatherCard` to display detailed weather info (Humidity, Wind, Temperature) using a glassmorphism design.
4.  **Integration**:
    *   Wrote the `fetchWeather` function to call `http://localhost:5000/api/weather`.

## Step 4: Styling & Post-Processing
**Goal:** Make the app look premium.
1.  **Tailwind Configuration**: Configured `tailwind.config.js` and `src/index.css`.
2.  **Design System**:
    *   Added a global gradient background.
    *   Used white opacity (`bg-white/20`) and blur filters (`backdrop-blur-md`) for the "Glass" effect.
3.  **Fixing Issues**:
    *   Encountered a `postcss` error with Tailwind v4.
    *   Fixed by installing `@tailwindcss/postcss` and updating `postcss.config.js`.

## Step 5: Verification & Launch
**Goal:** Ensure everything works.
1.  Added a `start` script to the backend.
2.  Ran both servers concurrently (`npm start` backend, `npm run dev` frontend).
3.  Verified data flow: User Input -> Frontend -> Backend Proxy -> OpenWeatherMap -> Backend -> Frontend -> Display.
