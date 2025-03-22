import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
      <div className="movie" key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>
  
        <div>
          <img src={Poster !== "N/A" ? Poster : "/placeholder.png"} alt={Title} />
        </div>
  
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    );
  }
  
  export default MovieCard;