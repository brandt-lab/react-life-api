import React, { useState, useEffect } from 'react';
import axios from 'axios';


 const AxiosComponents = () => {
  
const [movies , setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=all&api-key=adcJkDLGetSLrV4eFDh1Z8727kmwNz1O")

            .then((result) => {
              setMovies(result.data.results);
                (console.log(result.data)
                )
            })
            .catch((error) => {
            console.log(error)
            });
    }, []);

    return (
        <div>
        <h1>AxiosComponents</h1>
        {movies.map((item) => (
          <div key={item.display_title}>
            <p>date_updated: {item.date_updated}</p>
            <p>display_title: {item.display_title}</p>
            {item.multimedia && (
              <>
                <p>multimedia height: {item.multimedia.height}</p>
                <img src={item.multimedia?.src} alt={item.display_title} />
              </>
            )}
          </div>
        ))}
      </div>

    )
}

export default AxiosComponents ;
