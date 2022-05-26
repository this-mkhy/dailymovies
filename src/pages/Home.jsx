import React from 'react'
import Main from '../components/Main'
import RowMovies from '../components/RowMovies'
import requestsEndpoints from '../services/requestsEndpoints'

function Home() {
  return (
    <>
      <Main />
      <RowMovies rowID='1' title='UpComing' fetchURL={requestsEndpoints.requestUpcoming} />
      <RowMovies rowID='2' title='Popular' fetchURL={requestsEndpoints.requestPopular} />
      <RowMovies rowID='3' title='Trending' fetchURL={requestsEndpoints.requestTrending} />
      <RowMovies rowID='4' title='Top Rated' fetchURL={requestsEndpoints.requestTopRated} />
      <RowMovies rowID='5' title='Horror' fetchURL={requestsEndpoints.requestHorror} />
    </>
  )
}
export default Home