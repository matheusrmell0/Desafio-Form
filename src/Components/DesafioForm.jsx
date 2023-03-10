/*
* CHALLENGE progresso do formulário

* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.

* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar

* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/
import React from 'react';
const fieldForm = [
  { id: 'nome' },
  { id: 'email' },
  { id: 'estadoCivil' },
  { id: 'genero' },
];

function FormChallenger() {
  const formData = fieldForm.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: '',
    };
  }, {});
  const [form, setForm] = React.useState(formData);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function progressBar() {
    let valor = 0;
    let amount = 25;

    if (form.nome) {
      const fullname = form.nome.split(' ');
      if (fullname[1]) {
        valor += amount;
      }
    }
    if (form.email) {
      let regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(form.email)) {
        valor += amount;
      }
    }
    if (form.estadoCivil) {
      valor += amount;
    }
    if (form.genero) {
      valor += amount;
    }
    return valor;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (progressBar() === 100) {
      alert('Formulário enviado com sucesso');
      setForm(formData);
    }
  }

  return (
    <div className="App">
      <br></br>
      <h1>Progresso do formulário</h1>

      <main>
        {/* crie a barra de progresso aqui */}
        <div className="bar-container">
          <div style={{ width: `${progressBar()}%` }} className="bar"></div>
        </div>
        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
          <input id="nome" value={form.nome} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input id="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Estado Civil</label>
          <select id="estadoCivil" onChange={handleChange}>
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Gênero</label>
          <div className="radios-container">
            <span>
              <input
                id="genero"
                type="radio"
                value="masculino"
                name="genero"
                onChange={handleChange}
              />{' '}
              Masculino
            </span>
            <span>
              <input
                id="genero"
                type="radio"
                name="genero"
                value="feminino"
                onChange={handleChange}
              />{' '}
              Feminino
            </span>
          </div>
        </div>
        <button disabled={progressBar() !== 100} onClick={handleSubmit}>
          Enviar Formulário
        </button>
      </main>
    </div>
  );
}

export default FormChallenger;
