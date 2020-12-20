import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    

    render() {
        return(
            <div id="detail-backing">
                <p id="title-text">{this.props.reduxState.movieToDetail.title}</p>
                <div className="detailSpace">
                    <img src={this.props.reduxState.movieToDetail.poster} 
                                style = {{width: "185px", height: "270px"}}/>
                    <div id="genre-list">
                        <p>Genres</p>
                        <ul>
                            {this.props.reduxState.genres.map(type => <li>{type.name}</li>)}
                        </ul>
                    </div>
                    <div id="description-text">
                        <p> {this.props.reduxState.movieToDetail.description}</p>
                        <button className="returnButton" onClick={(event) => this.props.history.push('/')}>Back to List</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(Details);