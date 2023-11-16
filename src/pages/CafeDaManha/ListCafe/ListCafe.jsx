import React, { useEffect, useState } from "react";
import "./style.css";
import useFetch from "../../../hooks/useFetch";
import { deleteCafe, listCafeDaManha } from "../../../api/Api";
import { useNavigate } from 'react-router-dom';

const ListCafe = () => {
  const { loading, request } = useFetch();
  const [dataCafeList, setDataCafeList] = useState(null);
  const [reloadListCafe, setReloadListCafe] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    async function listCafeManha() {
      const { url, options } = listCafeDaManha();
      const { response, json } = await request(url, options);

      console.log(json);
      if (response.status === 200) {
        setDataCafeList(json);
      }

      if (response.status === 204) {
        console.log("Lista vazia");
      }
    }

    listCafeManha();
  }, [request, setDataCafeList, reloadListCafe]);

  const handleDelete = async (id) => {
    const { url, options } = deleteCafe(id);
    const { response } = await request(url, options);

    if (response.status === 200) {
        setReloadListCafe((value) => value + 1)
    }
  };

  const handleEdit = (id) => {
    navigate(`/updateCafe/${id}`);
  };

  if (dataCafeList) {
    return (
      <div className="table-container">
        <div className="container-list">
          <table>
            <thead>
              <tr>
                <th>Nome do Colaborador</th>
                <th>Opção do Café</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {dataCafeList &&
                dataCafeList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nomeColaborador}</td>
                    <td>{item.opcaoCafe}</td>
                    <td>{item.data}</td>
                    <td>
                    <button
                      onClick={() => handleEdit(item.id)}
                      style={{ backgroundColor: 'yellow', color: 'black', marginRight: "10px"}}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{ backgroundColor: 'red', color: 'white' }}
                    > Deletar</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default ListCafe;
