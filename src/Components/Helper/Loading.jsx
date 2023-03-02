import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <>
      <section className={`container`}>
        <div className={`${styles.loading}`}>
          <div
            style={{ border: '20px solid white', borderRadius: '50%' }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Loading;
