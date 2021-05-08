import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Table } from "reactstrap";
import axios from "axios";
import { api } from "../../config";

export const Home = () => {
  const [data, setData] = useState([]);
  const getDados = async () => {
    try {
      await axios.get(api).then((response) => {
        setData(response.data.user)
        
      });
    } catch (err) {
      console.log("deu ruim");
    }
  };
  useEffect(() => {
    getDados();
  });
  return (
    <div>
      <Container>
        <div className=" d-flex">
          <div className="mr-auto p-2">
            <h1> Home from hell </h1>
          </div>
          <div className="p-3">
            <a href="/cadastrar" className="btn btn-outline-success btn-sm">
              Cadastrar
            </a>
          </div>
        </div>
        <Table striped hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
