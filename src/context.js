import React, { useContext, useEffect, useState } from "react";
export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

export const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}`;

export const API_ID = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

export const API_IMG = `https://image.tmdb.org/t/p/w500//`;
const AppContext = React.createContext();
// we need to create a provider fun
const AppProvider = ({ children }) => {
     const [isLoading, setIsLoading] = useState(true);
     const [movie, setMovie] = useState([]);
     const [isError, setIsError] = useState({ show: "false", msg: "" });

     const getMovies = async (url) => {
          setIsLoading(true);
          try {
               const res = await fetch(url);
               const data = await res.json();
               console.log(data);
               if (data.results.length > 0) {
                    setIsLoading(false);
                    setMovie(data.results);
               } else {
                    setIsError({
                         show: true,
                         msg: data.Error,
                    });
               }
          } catch (error) {
               console.log(error);
          }
     };
     useEffect(() => {
          getMovies(API_URL);
     }, []);

     const onSearch = (query) => {
          getMovies(`${API_SEARCH}&query=${query}`);
     };

     return (
          <AppContext.Provider value={{ isLoading, isError, movie, onSearch }}>
               {children}
          </AppContext.Provider>
     );
};

//Global custom hooks
const useGlobalContext = () => {
     return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
