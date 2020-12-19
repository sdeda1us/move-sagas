import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    

    render() {
        return(
            <div>
                <h2>{this.props.reduxState.movieToDetail.title}</h2>
                <div className="detailSpace">
                    <img src={this.props.reduxState.movieToDetail.poster}/>
                    <div>
                    <p>Genres</p>
                        <ul>
                            {this.props.reduxState.genres.map(type => <li>{type.name}</li>)}
                        </ul>
                    </div>
                    <p>Details: {this.props.reduxState.movieToDetail.description}</p>
                    <br/>
                    <button className="returnButton" onClick={(event) => this.props.history.push('/')}>Back to List</button>
                </div>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(Details);