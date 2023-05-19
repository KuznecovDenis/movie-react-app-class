import React, { Component } from 'react';

class Search extends Component {
	state = {
		search: '',
		type: 'all',
	};

	handlKeySearch = (e) => {
		if (e.keyCode === 13) {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	};

	handleFilter = (e) => {
		this.setState({ type: e.target.dataset.type });
	};

	render() {
		return (
			<div className='row'>
				<div className='input-field col s12'>
					<input
						id='search'
						type='search'
						className='validate'
						placeholder='Search'
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={this.handlKeySearch}
					/>
					<button
						className='btn btn-search indigo accent-2'
						type='button'
						onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
						Search
					</button>
				</div>
				<div className='search-filter'>
					<label>
						<input
							className='with-gap'
							name='group3'
							type='radio'
							data-type='all'
							checked={this.state.type === 'all'}
							onChange={this.handleFilter}
						/>
						<span>All</span>
					</label>
					<label>
						<input
							className='with-gap'
							name='group3'
							type='radio'
							data-type='movie'
							checked={this.state.type === 'movie'}
							onChange={this.handleFilter}
						/>
						<span>Movie</span>
					</label>
					<label>
						<input
							className='with-gap'
							name='group3'
							type='radio'
							data-type='series'
							checked={this.state.type === 'series'}
							onChange={this.handleFilter}
						/>
						<span>Series</span>
					</label>
				</div>
			</div>
		);
	}
}

export default Search;
