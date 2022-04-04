import React from 'react';
import isNil from 'lodash.isnil';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Image from '../Image';
import CONSTANTS from '../../utils/constants';
import Types from '../../utils/types';
import './styles.css';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';

const { SIZE } = CONSTANTS.IMAGE;

function renderImage(title, posterPath) {
  return <Image size={SIZE.LARGE} path={posterPath} title={title} />;
}

function renderTitle(title) {

  return (
    <Container className="Details-title">
      <Row>
        <Col>
          <h1 data-cy="movie-details-title">
            {title}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

function renderVotes(voteAverage, voteCount) {
  return (
    <Container className="Details-votes">
      <Row>
        <Col xs={2}>
          <p className="average">
          <AiFillStar /> <label>{voteAverage}</label>
          </p>
        </Col>
        <Col xs={2}>
          <p className="count">
          <AiFillHeart /> <label>{voteCount}</label>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

function renderOverview(overview) {
  return (
    <div className="Details-overview">
      <p>{overview}</p>
    </div>
  );
}

function renderProductions(productions) {
  if (!isNil(productions) && productions.length > 0) {
    return (
      <div className="Details-productions">
         <h2>Produtoras</h2>
        {productions.map((production) => <label>{production.name}</label>)}
      </div>
    );
  }
}

function renderGenres(genres) {
  if (!isNil(genres) && genres.length > 0) {
    return (
      <div className="Details-genres">
        <h2>Gêneros</h2>
        {genres.map((genres) => <label>{genres.name},</label>)}
      </div>
    );
  }

  return null;
}


export default function Details({ movie }) {
  const {
    overview,
    genres,
    homepage,
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
    vote_count: voteCount,
    production_companies: productions
  } = movie;

  return (
    <Container className="Details-main">
      <Row>
        <Col className="Details-title">
          {renderTitle(title)}
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} className="Details-image">
          {renderImage(title, posterPath)}
        </Col>

        <Col sm={12} md={8} className="Details-body">
          {renderVotes(voteAverage, voteCount)}
          {renderGenres(genres)}
          {renderProductions(productions)}
          {renderOverview(overview)}
        </Col>
      </Row>
    </Container>
  );
}

Details.propTypes = {
  movie: Types.movie.isRequired,
};
