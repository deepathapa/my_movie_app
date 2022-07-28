import React from "react";
import { FiSearch } from "react-icons/fi";
import { useGlobalContext } from "./context";
const Search = () => {
     const { onSearch, isError } = useGlobalContext();
     return (
          <>
               <section className='search-section'>
                    <div className=''>
                         <form action='#' onSubmit={(e) => e.preventDefault()}>
                              <div className='search_box'>
                                   <input
                                        type='text'
                                        placeholder='search movies'
                                        onChange={(e) =>
                                             onSearch(e.target.value)
                                        }
                                   />

                                   <span class='btn icon'>
                                        <FiSearch className='FIsearch' />
                                   </span>
                              </div>
                         </form>
                    </div>

                    <div className='card-error'>
                         <p>{isError.show && isError.msg}</p>
                    </div>
               </section>
               ;
          </>
     );
};

export default Search;
