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

  console.log(movie)
  return (
    <div>
      

    </div>
  )
}
export default Main