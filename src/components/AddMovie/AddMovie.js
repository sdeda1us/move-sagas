import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
    
    

    handleSubmit = (event) => {
        event.preventDefault();
        let newMovie = {
            title: this.props.reduxState.setTitle,
            url: this.props.reduxState.setURL,
            description: this.props.reduxState.setDescription,
            genre: this.props.reduxState.setGenre
        }
        this.props.dispatch({type:'POST_MOVIE', payload: newMovie});
    }

    render() {
        return(
            <div>
                <h3>Add a movie</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Movie Name</label>   
                    <input type="text" onChange={(event) => this.props.dispatch({type:'SET_TITLE', payload: event.target.value})} />
                    <label>Movie Poster URL</label>
                    <input type="text" onChange={(event) => this.props.dispatch({type:'SET_URL', payload: event.target.value})}/>
                    <label>Movie Description</label>
                    <br/>
                    <textarea type="text" rows="6" columns="100" onChange={(event) => this.props.dispatch({type:'SET_DESCRIPTION', payload: event.target.value})}/>
                    <br/>
                    <label>Genre</label>
                    <select name="genres" onChange={(event) => this.props.dispatch({type:'SET_GENRE', payload: event.target.value})}>
                        <option>Choose a genre</option>
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space-Opera</option>
                        <option value="13">Superhero</option>
                    </select>
                    <button type="submit">Save</button>
                    <button onClick={(event)=> this.props.history.push('/')}>Cancel</button>
                </form>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(AddMovie);