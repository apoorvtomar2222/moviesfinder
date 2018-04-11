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
    render() {
        return (
            <div>
                <div >
                    <label >Find User</label>
                    <input type="text" className="form-control" id="usr" value={this.state.searchParam} onChange={e => this.onTodoChange(e.target.value)} />
                    <input type='button' onClick={this.submit} value='Search User' />
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