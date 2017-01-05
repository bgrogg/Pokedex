import React, { Component } from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';

class PokemonIndex extends Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    return (
      <ul>
        Test
      </ul>
    );
  }
}

export default PokemonIndex;
