import React from 'react';
import Movie from './Movie';

const Movies = (props) => {
	const { movies = [] } = props;

	return movies.length ? (
		<div className='movies'>
			{movies.map((movie) => (
				<Movie key={movie.imdbID} {...movie} />
			))}
		</div>
	) : (
		<h3 align='center'>Ничего не найдено по данному запросу...</h3>
	);
};

export default Movies;
