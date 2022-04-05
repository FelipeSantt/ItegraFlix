import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie';
import Types from '../../utils/types';
import './styles.css';

/**
 * Componente responsável por mostrar a lista de filmes mais populares
 */
export default function Movies({ movies }) {
  return (
    <Container className="Movies-main">
      <h2 className='Movies-subtitle'>Populares</h2>
      <Row>
        {movies.slice(0,10).map((movie) => <Movie key={movie.id} movie={movie} />)}
      </Row>
    </Container>
  );
}

Movies.propTypes = {
  movies: Types.movies.isRequired,
};
