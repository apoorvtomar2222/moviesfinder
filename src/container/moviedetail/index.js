import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncLoadMovieDetails } from '../../actions/asyncActions/movie.async.action'

class MovieDetails extends Component {
    componentDidMount() {
        this.props.dispatch(asyncLoadMovieDetails(this.props.match.params));
    }
    render() {
        return (
            <div className='well'>
                <ul className="list-group">
                    <li className="list-group-item">ID  : {this.props.movieReducer.movieDetails.imdb_id}</li>
                    <li className="list-group-item">Title :  {this.props.movieReducer.movieDetails.title} </li>
                    <li className="list-group-item">Overview : {this.props.movieReducer.movieDetails.overview}</li>
                    <li className="list-group-item">Vote Count : {this.props.movieReducer.movieDetails.vote_count}</li>
                    <li className="list-group-item">Tagline : {this.props.movieReducer.movieDetails.tagline}</li>
                    <li className="list-group-item">Popularity : {this.props.movieReducer.movieDetails.popularity}</li>
                    <li className="list-group-item">Vote_average : {this.props.movieReducer.movieDetails.vote_average}</li>
                    <li className="list-group-item">Status : {this.props.movieReducer.movieDetails.status}</li>
                    <li className="list-group-item">Release Date : {this.props.movieReducer.movieDetails.release_date}</li>
                    <li className="list-group-item">Vote_average : {this.props.movieReducer.movieDetails.vote_average}</li>

                </ul>
            </div>
        )
    }
}

export default connect(state => state, null)(MovieDetails)