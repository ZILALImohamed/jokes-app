import React from 'react';
import {connect} from 'react-redux';
import client from '../core/client';
import {LOAD_JOKES} from "../store/joke/actions";
import JokList from "./jokeList";

const mapStateToProps = state => {
  return {
    ...state.jokesList
  }
};

const mapDispatchToProps = dispatch => ({
  loadJokes: () =>
    dispatch({type: LOAD_JOKES, payload: client.Jokes.getTen()})
});

class Home extends React.Component {
  componentWillMount() {
    this.props.loadJokes();
  }

  render() {
    return (
      <div style={{height: "400px", overflow: 'auto'}}>
        <JokList jokes={this.props.jokes} loadJokes={this.props.loadJokes}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
