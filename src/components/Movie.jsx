import React from 'react';

const Movie = (props) => {
	let { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

	return (
		<div className='card' id={id}>
			<div className='card-image waves-effect waves-block waves-light'>
				{poster === 'N/A' || !poster ? (
					<img
						className='activator'
						src={`https://placehold.co/300x480?text=${title}`}
						alt='poster'
					/>
				) : (
					<img className='activator' src={poster} alt='poster' />
				)}
			</div>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>{title}</span>
				<p>
					Year: {year} <span className='right'>{type}</span>
				</p>
			</div>
			{/* <div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>
					Card Title<i className='material-icons right'>close</i>
				</span>
				<p>
					Here is some more information about this product that is only revealed once clicked
					on.
				</p>
			</div> */}
		</div>
	);
};

export default Movie;
