import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';
import getImageSrc from '../../utils/getImageSrc';

/**
 * Componente responsável por mostrar a imagem do filme
 *
 * @param {object} props - As propriedades do componente
 * @param {string} props.size - Tamanho da imagem do filme
 * @param {string} props.path - Caminho da imagem do filme
 * @param {string} props.title - O título do filme
 */
export default function Image({ size, path, title }) {
  const src = getImageSrc(size, path);
  const altText = `Poster of ${title}`;
  return (
    <Figure>
      <Figure.Image
        alt={altText}
        src={src}
      />
    </Figure>
  );
}

Image.propTypes = {
  size: PropTypes.shape({
    DEFAULT: PropTypes.string.isRequired,
    NO_POSTER: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Image.defaultProps = {
  path: '',
};
