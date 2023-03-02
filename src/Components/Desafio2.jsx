import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Reducers/dadosPuro';
import Loading from './Helper/Loading';
import Error from './Helper/Error';

const Desafio = () => {
  const dispatch = useDispatch();
  React.useState(() => {
    dispatch(fetchData());
  }, []);

  const { loading, data, error } = useSelector((state) => state.data);
  //

  //
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <>
      <section className={`container animeLeft`}>
        <h1 className={`title`}>Desafio</h1>
      </section>
    </>
  );
};

export default Desafio;
