import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    
    render() {
        return(
            <div className="backing">
                <h1>Edit Movie Information</h1>
                <form>
                    <div>
                        <label className="oswald-text">Movie Title:</label><br/>
                        <input class="title-input" type="text" defaultValue={this.props.reduxState.movieToDetail.title}/>
                    </div>
                    <div>
                        <label className="oswald-text">Movie Poster URL:</label><br/>
                        <input class="url-input" type="text" defaultValue={this.props.reduxState.movieToDetail.poster}/>
                    </div>
                    <div>
                        <label className="oswald-text">Movie Description:</label> <br/>
                        <textarea className="description-textarea" defaultValue={this.props.reduxState.movieToDetail.description}/>
                    </div>
                    <div>
                        <label className="oswald-text">Movie genres</label><br/>
                        <input type="checkbox" name="Adventure" value="1"/>
                        <label for="Adventure">Adventure</label>
                        <input type="checkbox" name="Animated" value="2"/>
                        <label for="Animated">Animated</label>
                        <input type="checkbox" name="Biographical" value="3"/>
                        <label for="Biographical">Biographical</label>
                        <input type="checkbox" name="Comedy" value="4"/>
                        <label for="Comedy">Comedy</label>
                        <input type="checkbox" name="Disaster" value="5"/>
                        <label for="Disaster">Disaster</label>
                        <input type="checkbox" name="Drama" value="6"/>
                        <label for="Drama">Drama</label>
                        <input type="checkbox" name="Epic" value="7"/>
                        <label for="Epic">Epic</label>
                        <input type="checkbox" name="Fantasy" value="8"/>
                        <label for="Fantasy">Fantasy</label>
                        <input type="checkbox" name="Musical" value="9"/>
                        <label for="Musical">Musical</label>
                        <input type="checkbox" name="Romantic" value="10"/>
                        <label for="Romantic">Romantic</label>
                        <input type="checkbox" name="Science Fiction" value="11"/>
                        <label for="Science Fiction">Science Fiction</label>
                        <input type="checkbox" name="Space Opera" value="12"/>
                        <label for="Space Opera">Space Opera</label>
                        <input type="checkbox" name="Superhero" value="13"/>
                        <label for="Superhero">Superhero</label>
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

export default connect(mapReduxStateToProps)(Edit);