import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Image from '../Image';
import Types from '../../utils/types';
import CONSTANTS from '../../utils/constants';
import { AiFillStar, AiFillHeart } from 'react-icons/ai'

import './styles.css';

const { SIZE } = CONSTANTS.IMAGE;

/**
 * Componente responsável por mostrar o filme
 */
export default function Movie({ movie }) {
  const {
    id,
    title,
    vote_average: voteAverage,
    vote_count: voteCount,
    poster_path: posterPath,
    release_date: releaseDate,
  } = movie;

  const year = new Date(releaseDate).getFullYear();
  const title_limit = title.substring(0, 23);

  return (
    <Col lg={3}>
      <div
        className="Movie-card"
        data-cy="movie-item">
        <Row>
          <Link to={`/itegraFlix/details/${id}`}>
            <Image size={SIZE.SMALL} path={posterPath} title={title} />
          </Link>
        </Row>
        <Row>
          <Link to={`/itegraFlix/details/${id}`}>
            <span className="Movie-title">{title_limit}</span>
          </Link>
        </Row>  
        <Row className="Movie-info">
          <Col xs={4}>
            <div>
              <AiFillStar /> <label>{voteAverage}</label>
            </div>
          </Col>
          <Col xs={4}>
            <small>
              {year}
            </small>
          </Col>
          <Col xs={4}>
            <AiFillHeart/><label>{voteCount}</label>
          </Col>
        </Row>
    </div>
    </Col>
  );
}

Movie.propTypes = {
  movie: Types.movie.isRequired,
};
