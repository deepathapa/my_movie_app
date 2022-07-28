import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink, useParams } from "react-router-dom";

const SingelMovie = () => {
     const { id } = useParams();
     const [isLoading, setIsLoading] = useState(true);
     const [movie, setMovie] = useState("");

     const getMovies = async (url) => {
          setIsLoading(true);
          try {
               const res = await fetch(url);
               const data = await res.json();
               console.log(data);
               if (data.id) {
                    setIsLoading(false);
                    setMovie(data);
               }
          } catch (error) {
               console.log(error);
          }
     };
     useEffect(() => {
          getMovies(
               `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
          );
     }, [id]);

     if (isLoading) {
          return (
               <div className='movie-section'>
                    <div className='loading'>Loading.........</div>
               </div>
          );
     }
     return (
          <section className='movie-section'>
               <div className='movie_wrapper'>
                    <div className='movie-card'>
                         <div className='card-content'>
                              <p className='title'>{movie.title}</p>
                              <p className='card-text'>
                                   {" "}
                                   <span className='font_title'>Rating:</span>
                                   <span className='font_title'>4.65/5</span>
                              </p>
                              <p className='card-text'> {movie.overview}</p>
                              <p className='card-text'>
                                   {" "}
                                   <span className='font_title'>
                                        Release Date
                                   </span>
                                   <span className='movie_left'>
                                        {" "}
                                        {movie.release_date}{" "}
                                   </span>
                              </p>
                              <p className='card-text'>
                                   <span className='font_title'>
                                        Orginal Language
                                   </span>
                                   <span className='movie_left '>
                                        {" "}
                                        {movie.original_language}
                                   </span>
                              </p>
                              <NavLink to='/' className='back-btn'>
                                   <FiArrowLeft />
                              </NavLink>
                         </div>
                         <div>
                              <figure>
                                   <img
                                        src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
                                        alt=''
                                   />
                              </figure>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SingelMovie;
