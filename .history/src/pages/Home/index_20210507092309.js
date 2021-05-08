import React from "react";
import { Container } from "reactstrap";
import { Table } from "reactstrap";
export const Home = () => {
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
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
