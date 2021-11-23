import React, { useEffect } from 'react';
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/moviesSlice';

const Home = () => {

    const movieText = 'Harry'
    const showText = 'Friends'
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(fetchAsyncMovies(movieText))
       dispatch(fetchAsyncShows(showText))
    },[dispatch])
    return (
        <div>
        <div className='banner-img'> </div>
        <MovieListing/>
        </div>
    );
};

export default Home;