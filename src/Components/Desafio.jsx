import React from 'react';
import styles from './Desafio.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDados } from '../Redux/Reducers/dados';
import Loading from './Helper/Loading';
import Error from './Helper/Error';

const Desafio = () => {
  const dispatch = useDispatch();

  React.useState(() => {
    dispatch(fetchDados());
  }, []);
  const { loading, error } = useSelector((state) => state.dados);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <>
      <section className={`container animeLeft`}>
        <div className={`${styles.desafio}`}>
          <h1 className={`title`}>Desafio</h1>
        </div>
      </section>
    </>
  );
};

export default Desafio;
