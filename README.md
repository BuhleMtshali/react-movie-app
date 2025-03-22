# MovieLand

MovieLand is a simple React application that allows users to search for movies using the OMDB API. It is built with React, Vite, and styled with CSS.

## Features
- Search for movies by title
- Display movie results with title, year, type, and poster
- Responsive design for different screen sizes

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- CSS
- OMDB API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BuhleMtshali/react-movie-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-movie-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Enter a movie title in the search bar.
2. Click the search icon or press Enter to fetch movie results.
3. Browse through the list of movies displayed.

## Project Structure
```
react-movie-app/
│-- src/
│   │-- components/
│   │   ├── MovieCard.jsx
│   │-- App.jsx
│   │-- App.css
│   │-- main.jsx
│-- public/
│-- package.json
│-- vite.config.js
│-- README.md
```

## API Key
This project uses the OMDB API. If you wish to use your own API key, replace the `apiUrl` in `App.jsx`:
```javascript
const apiUrl = "http://www.omdbapi.com/?apikey=YOUR_API_KEY";
```

## Deployment
To deploy the project, run:
```bash
npm run build
```
Then, host the `dist/` folder on any static hosting service (e.g., Vercel, Netlify, GitHub Pages).

## Contributing
Feel free to fork the repository and submit pull requests.


