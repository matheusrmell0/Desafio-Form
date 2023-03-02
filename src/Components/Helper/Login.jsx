export default function login({ email, password, validation } ) {
  const delay = (0, 7 + Math.random() * 2) * 1000;
  return new Promise((resolve, recject) => {
    setTimeout(function () {
      if (validation && password === 'senha123' && !!email) {
        resolve(alert('Logado com sucesso'));
      } else {
        recject({ message: 'Email ou senha invalido' });
      }
    }, delay);
  });
}
