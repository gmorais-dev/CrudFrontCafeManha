import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { atualizarCafeDaManha } from "../../../api/Api";
import { useParams } from "react-router-dom";

const UpdateCafe = () => {
  const [nome, setNome] = useState();
  const [cpf, setCPF] = useState();
  const [opcao, setOpcao] = useState();
  const [data, setData] = useState();
  const { loading, request } = useFetch();
  const [responseSuccess, setResponseSucess] = useState(null);
  const { id } = useParams();
  
  async function updateCafeById() {
    const bodyFormCafe = {
      id,
      nomeColaborador: nome,
      cpf,
      opcaoCafe: opcao,
      data: new Date(data).toISOString(),
    };

    const { url, options } = atualizarCafeDaManha(bodyFormCafe);
    const { response } = await request(url, options);

    if (response.status === 200) {
      setResponseSucess(true);
    }

    if (response.status === 400) {
      setResponseSucess(false);
    }

    if (response.status === 500) {
      setResponseSucess(false);
    }
  }

  return (
    <div className="main">
      <h1>Atualizar Café da Manhã</h1>
      <div className="containerForm">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          required
          onChange={(e) => setCPF(e.target.value)}
        />

        <label htmlFor="opcao">Opção de Café:</label>
        <input
          type="text"
          id="opcao"
          name="opcao"
          required
          onChange={(e) => setOpcao(e.target.value)}
        />

        <label htmlFor="data">Data do Café:</label>
        <input
          type="date"
          id="data"
          name="data"
          required
          onChange={(e) => setData(e.target.value)}
        />

        <button type="submit" onClick={updateCafeById}>
          Registrar
        </button>
      </div>
      {responseSuccess != null ? (
        responseSuccess ? (
          <p className="responseCreateSucess">Atualizado com sucesso</p>
        ) : (
          <p className="responseCreateSucess">Houve um error</p>
        )
      ) : null}
    </div>
  );
};

export default UpdateCafe;
