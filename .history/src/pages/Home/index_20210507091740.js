import React from "react";
import { Container } from "reactstrap";
export const Home = () => {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1> Home from hell </h1>
          </div>
          <div className="p-2">
            <a href="/cadastrar" className="btn btn-success btn-sm btn-online">Cadastrar</a>
          </div>
        </div>
      </Container>
    </div>
  );
};
