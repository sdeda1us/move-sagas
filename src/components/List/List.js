import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_POSTERS'});
    }

    render() {
        return(
            <p>Hi from List</p>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(List);