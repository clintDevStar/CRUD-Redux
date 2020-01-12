import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import fetchGames from "../middleware/gameMiddleware";
import { getGames, getGamesPending, getGamesError } from "../reducers/games";

import GamesList from "./GamesList";
import { bindActionCreators } from "redux";

class GamesPage extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchGames } = this.props;
    fetchGames();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    return true;
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>
        {error && <span>{error}</span>}
        <GamesList games={games} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getGamesError(state),
  games: getGames(state),
  pending: getGamesPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchGames
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);
