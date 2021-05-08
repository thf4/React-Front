import React, { useEffect, useState } from "react";
import { Container, Alert } from "reactstrap";
import { Table } from "reactstrap";
import axios from "axios";
import { api } from "../../config";

export const Home = () => {
  const [data, setData] = useState([]);
  const [ status, setStatus ] = useState({
    type:"",
    message:""
  })
  const getDados = async () => {
    try {
      await axios.get(api).then((response) => {
        setData(response.data.users)
        
      });
    } catch (err) {
      setStatus({
        type:"error",
        message:"Error: tente mais tarde"
      })
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
        < Alert color="danger">
          {status.message}
        </Alert>
        <Table striped hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody >
            {data.map(item =>(
              <tr key={item._id}>
              <td>{item._i}</td>
              <td>{item.nam}</td>
              <td>{item.emal}</td>
              <td>{item.dae}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
