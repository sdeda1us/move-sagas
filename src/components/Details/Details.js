import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    

    render() {
        return(
            <div>
                <h2>{this.props.reduxState.movieToDetail.title}</h2>
                <img src={this.props.reduxState.movieToDetail.poster}/>
                <p>Categories: </p>
                <p>Details: {this.props.reduxState.movieToDetail.description}</p>
                <button onClick={(event) => this.props.history.push('/')}>Back to List</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(Details);