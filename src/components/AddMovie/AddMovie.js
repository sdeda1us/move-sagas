import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
    
    
//On form submit, creates an object out of input reducers 
//and dispatches payload to bbe added to the db
//also clears the values in the input fields and navigates user back to the main page
    handleSubmit = (event) => {
        event.preventDefault();
        let newMovie = {
            title: this.props.reduxState.setTitle,
            url: this.props.reduxState.setURL,
            description: this.props.reduxState.setDescription,
            genre: this.props.reduxState.setGenre
        }
        this.props.dispatch({type:'POST_MOVIE', payload: newMovie});
        this.props.dispatch({type: 'CLEAR_FORMDATA'});
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="flexContainer">
                        <div id="ticket-stub">
                            <h3>Add a movie</h3>
                        </div>
                    <div className="formSpace">
                        <div className="textForm">
                            <label>Movie Name: </label>   
                            <input className="inputStyle" type="text" onChange={(event) => this.props.dispatch({type:'SET_TITLE', payload: event.target.value})} />
                        </div>
                        <div className="textForm">
                            <label>Poster URL: </label>
                            <input type="text" onChange={(event) => this.props.dispatch({type:'SET_URL', payload: event.target.value})}/>
                        </div>
                        <div className="textForm">
                            <label>Movie Description: </label>
                        </div>
                        <textarea type="text" className="description-textarea" onChange={(event) => this.props.dispatch({type:'SET_DESCRIPTION', payload: event.target.value})}/>
                    </div>
                    <div clasName="form-space">
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
                    </div>
                    </div>
                    <div className="button-flex-row">
                        <button className="save-button" type="submit">Save</button>
                        <button className="cancel-button" onClick={(event)=> {this.props.dispatch({type: 'CLEAR_FORM_DATA'}); 
                                                    this.props.history.push('/')}}>
                                                    Cancel
                                                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

//loads redux state
const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(AddMovie);