import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
const Movies = () => {
     const { movie, setMovie } = useGlobalContext();
     return (
          <>
               <section className='movie-page'>
                    <h3 className='tranding_title'>Trendings</h3>
                    <div className='container grid grid-4-col'>
                         {movie.map((curMovie) => {
                              var { id, title, poster_path } = curMovie;

                              const movieName = title.substring(0, 15);
                              return (
                                   <NavLink to={`movie/${id}`} key={id}>
                                        <div className='card'>
                                             <div className='card-info'>
                                                  <img
                                                       src={`https://image.tmdb.org/t/p/w500//${poster_path}`}
                                                       alt=''
                                                  />
                                                  <div className='card_title'>
                                                       <div>
                                                            <h5>
                                                                 {movieName.length >=
                                                                 15
                                                                      ? `${movieName} ...`
                                                                      : movieName}
                                                            </h5>
                                                            <span className='rating'>
                                                                 <FaStar className='star' />
                                                                 4.6/5
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </NavLink>
                              );
                         })}
                    </div>
               </section>
          </>
     );
};

export default Movies;
