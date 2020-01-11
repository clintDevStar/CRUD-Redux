import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import  fetchGames  from "../actions/games";
import GamesList from "./GamesList";


class GamesPage extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }
  render() {
    return (
      <div>
        <h1>Games List</h1>
        <GamesList games={this.props.games} />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fecthGames: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps, { fetchGames })(GamesPage);
