import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


class List extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_POSTERS'});
    }

    handleClick(film) {
        this.props.dispatch({type: 'GET_DETAILS', payload: film})
        this.props.dispatch({type:'FETCH_GENRES', payload: film.id})
        this.props.history.push('/details');
    }

    render() {
        return(
                <CardDeck>
                    {this.props.reduxState.movies.map(film => 
                            <Card key={film.id} style = {{width: "20rem"}} border="secondary">
                                <Card.Img variant="top"
                                    style = {{width: "185px", height: "270px"}}
                                    src={film.poster}
                                    alt="movie poster" 
                                    onClick={(event)=> this.handleClick(film)}/>
                                <Card.Title>{film.title}</Card.Title>
                            </Card>
                        )
                    }
                </CardDeck>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(List);