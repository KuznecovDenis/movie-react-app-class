import React from 'react';
import Preloader from '../components/Preloader';
import Movies from '../components/Movies';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
	state = {
		movies: [],
		isLoading: true,
	};

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avatar`)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					movies: data.Search,
					isLoading: false,
				})
			)
			.catch((err) => {
				console.error(err);
				this.setState({
					isLoading: false,
				});
			});
	}

	searchMovies = (searchStr, type) => {
		this.setState({ isLoading: true });
		fetch(
			`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchStr}${
				type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					movies: data.Search,
					isLoading: false,
				})
			)
			.catch((err) => {
				console.error(err);
				this.setState({
					isLoading: false,
				});
			});
	};

	render() {
		return (
			<main className='container content'>
				<Search searchMovies={this.searchMovies} />
				{this.state.isLoading ? <Preloader /> : <Movies movies={this.state.movies} />}
			</main>
		);
	}
}

export default Main;
