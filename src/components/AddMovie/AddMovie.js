import React, { Component } from 'react';

class AddMovie extends Component {
    
    render() {
        return(
            <div>
                <h3>Add a movie</h3>
                <form>
                    <label>Movie Name</label>
                    <input type="text" />
                    <label>Movie Poster URL</label>
                    <input type="text"/>
                    <label>Movie Description</label>
                    <br/>
                    <textarea type="text" rows="6" columns="100"/>
                    <br/>
                    <label>Genre</label>
                    <select name="genres">
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
                </form>
            </div>
        )
    }
}

export default AddMovie;