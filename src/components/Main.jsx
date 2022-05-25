import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requestsEndpoints from '../services/requestsEndpoints'

function Main() {
  const [movies, setMovies] = useState([])

  //select a random movie
  const movie = movies[Math.floor(Math.random() * movies.length)]
  useEffect( () => {
    axios.get(requestsEndpoints.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  },[])

  //console.log(movie)

  //string size
  const stringSize = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='text-white w-full h-[550px]'>
      <div className='w-full h-full'>
        <div className='from-black absolute w-full h-[550px] bg-gradient-to-r'></div>
          <img
            className='w-full h-full object-cover'
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />

<div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className=' bg-gray-300 text-black border border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='text-white border-gray-300 border py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>
            {stringSize(movie?.overview, 180)}
          </p>
        </div>

      </div>
    </div>
  )
}
export default Main