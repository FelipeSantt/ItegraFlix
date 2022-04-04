import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/index';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import DetailsComponent from '../../components/Details';

export default function Details() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    setLoading(true);

    const list = [
      api.getMovieDetails(id),
    ];

    Promise.all(list)
      .then((data) => {
        const [movieData] = data;

        setMovie(movieData);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <DetailsComponent
        movie={movie}
      />
    </>
  );
}
