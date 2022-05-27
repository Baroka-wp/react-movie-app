import React from 'react';
import genreName from './Genres'

const Card = ({ movie }) => {
    const imagePath = 'https://image.tmdb.org/t/p/w500'
    const defaultimagePath = '../img/poster.jpeg'
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={movie.poster_path ? imagePath + movie.poster_path : defaultimagePath} alt="" />
                <div className="card-body">
                    <h5>{movie.title}</h5>
                    <div className="d-flex justify-content-start align-items-center div-genres">
                        {
                            genreName(movie.genre_ids).map(
                                genre =>
                                    <p className='genres'>{genre.name}</p>
                            )
                        }
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>{movie.release_date}</p>
                        <p className="text-muted"> {movie.vote_average}/10 <span>⭐</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;