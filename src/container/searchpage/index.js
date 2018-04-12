import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
    asyncDataload,
    asyncSearchMovie

} from '../../actions/index'
class Search extends Component {

    constructor(Props) {
        super(Props);
        this.state = {
            searchParam: ''
        }

    }
    componentDidMount() {
        this.props.dispatch(asyncDataload());
    }
    onSearchParamChange(value) {
        this.setState({
            searchParam: value
        });
    }

    searchMovie = () => {
        return (
            <form className="navbar-form navbar-left" action="/action_page.php">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" name="search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
    searchMovie = () => {
        this.props.dispatch(asyncSearchMovie(this.state.searchParam))
    }

    movieListDiv = (list) => {
        return (

            <div onClick={() => { this.props.history.push(`moviename/${list.id}`) }} key={list.id} style={{ border: '1px solid black', height: '100%', minHeight: '60vh' }} className='col-md-4 col-lg-4 col-sm-12 col-xs-12' >
                <h1>{list.title}</h1>
                <p>{list.overview}</p>

            </div>

        )
    }
    render() {
        if (this.props.homeReducer.nosuchmovie) {
            return (

                <div>
                    <div className="container-fluid">
                        <label >Search Movie</label>
                        <input type="text" className="form-control" id="usr" value={this.state.searchParam} onChange={e => this.onSearchParamChange(e.target.value)} />
                        <br />
                        <button className='btn-success pull-right' onClick={this.searchMovie}>Search </button>
                        <br />
                        <br />

                        <div className="row">
                            <h1 style={{ textAlign: 'center' }}>No Such Movie Found</h1>
                        </div>

                    </div>

                </div >
            );
        }
        else {
            return (

                <div>
                    <div className="container-fluid">
                        <label >Search Movie</label>
                        <input type="text" className="form-control" id="usr" value={this.state.searchParam} onChange={e => this.onSearchParamChange(e.target.value)} />
                        <br />
                        <button className='btn-success pull-right' onClick={this.searchMovie}>Search </button>
                        <br />
                        <br />

                        <div className="row">
                            {this.props.homeReducer.movielist.length > 0 && this.props.homeReducer.movielist.map(this.movieListDiv)}
                        </div>

                    </div>

                </div >
            );
        }

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(state => state, mapDispatchToProps)(Search);