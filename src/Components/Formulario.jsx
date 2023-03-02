import React from 'react';
import useForm from '../Hooks/useForm';
import Input from './Forms/Input';
import Button from './Forms/Button';
import Login from './Helper/Login';

const Formulario = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const email = useForm('email');
  const password = useForm('password');

  //
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (email.validation() && password.validation())
        await Login({
          email: email.value,
          password: password.value,
          validation: email.validation() && password.validation(),
        });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  //

  return (
    <>
      <section className={`container animeLeft`}>
        <h1 className={`title`}>Formulário</h1>

        <form onSubmit={handleSubmit}>
          <Input name="email" label="Email" type="emial" {...email} />
          <Input name="password" label="Senha" type="password" {...password} />
          {loading ? (
            <Button disabled>Entrando...</Button>
          ) : (
            <div>
              <Button>Entrar</Button>
            </div>
          )}
          <br></br>
          {error ? <span>{error}</span> : null}
        </form>
      </section>
    </>
  );
};

export default Formulario;
