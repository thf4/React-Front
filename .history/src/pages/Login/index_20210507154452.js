import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

export const Login = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-2 mt-4 p-2">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary pr-4">Login</Button>
            <Button color="primary ">Login</Button>
          </p>

        </Container>
      </Jumbotron>
    </div>
  );
};
