import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';


class List extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_POSTERS'});
    }

    // On poster click, fills redux state with values and routes to details page
    handleClick(film) {
        this.props.dispatch({type: 'GET_DETAILS', payload: film})
        this.props.dispatch({type:'FETCH_GENRES', payload: film.id})
        this.props.history.push('/details');
    }

    render() {
        return(
                <div className="poster-space">
                    {this.props.reduxState.movies.map(film => 
                            <div className="poster-card" key={film.id}>
                                <img 
                                    style = {{width: "185px", height: "270px"}}
                                    src={film.poster}
                                    alt="movie poster" 
                                    onClick={(event)=> this.handleClick(film)}/>
                                <h4>{film.title}</h4>
                            </div>
                        )
                    }
                </div>
        )
    }
}

//loads redux state
const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(List);