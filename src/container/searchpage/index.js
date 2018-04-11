import React, { Component } from 'react';
import { connect } from 'react-redux'

import { asyncDataload } from '../../actions/index'
class Search extends Component {

    constructor(Props) {
        super(Props);
        this.state = {
            searchParam: ''
        }

    }
    onTodoChange(value) {
        this.setState({
            searchParam: value
        });
    }

    submit = () => {
        this.props.dispatch(asyncDataload());

    }

    movieListDiv(list) {
        console.log('list');
        return (
            <div class="container-fluid">
                <div class="row">
                    hi

                </div>
            </div>
        )
    }
    render() {
        console.log('movielist', this.props.homeReducer.movielist.results);

        return (

            <div>
                <div >
                    <label >Find User</label>
                    <input type="text" className="form-control" id="usr" value={this.state.searchParam} onChange={e => this.onTodoChange(e.target.value)} />
                    <input type='button' onClick={this.submit} value='Search User' />
                </div>

                <div >
                    {this.props.homeReducer.movielist && this.props.homeReducer.movielist.results.maps(this.movieListDiv)}
                </div>

            </div >
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(state => state, mapDispatchToProps)(Search);