import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function RowMovies({ title, fetchURL, rowID }) {
    const [movies, setMovies] = useState([]);

    //api call
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
        setMovies(response.data.results);
        });
    }, [fetchURL]);
    //console.log(movies)

    //go to left
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    //go to right
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 300;
    };

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='flex items-center relative group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 absolute rounded-full hover:opacity-100 cursor-pointer opacity-50 z-10 hidden group-hover:block'
                    size={40}
                />
                <div
                    id={'slider' + rowID}
                    className='w-full h-full relative overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>

                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 absolute rounded-full hover:opacity-100 cursor-pointer opacity-50 z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </>
    )
}
export default RowMovies