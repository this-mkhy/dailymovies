import React from 'react'
import SavedMovies from '../components/SavedMovies';

export default function Account() {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg'
          alt='/movies'
        />

        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>

        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Favorite Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  )
}
