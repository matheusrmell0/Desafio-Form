const Error = ({ error }) => {
  return (
    <section>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center' }} className="title">
        {error}
      </h1>
    </section>
  );
};

export default Error;
