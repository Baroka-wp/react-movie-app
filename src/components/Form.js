import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import uniqid from 'uniqid';

const Form = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("star");
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=ead9ea71453e104bc708794f2884549f&language=en-US&page=1&query=' + movies;
    useEffect(() => {
        axios
            .get(url)
            .then((res) => setMovies(res.data.results))
    }, [query])

    return (
        <div className='album py-5'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    {
                        movies.map((movie) => <Card key={movie.id ? movie.id : uniqid()} movie={movie} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Form;