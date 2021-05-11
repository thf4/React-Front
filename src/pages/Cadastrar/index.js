import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
} from "reactstrap";
import React, { useState } from "react";
import axios from "axios";
import { cad } from "../../config/cadastrar";

export const Cadastrar = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const valorInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const cadUser = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      await axios.post(cad, user, { headers });
    } catch (err) {}
  };

  return (
    <div>
      <Form onSubmit={cadUser}>
        <Container className="mt-4">
          <h1> Cadastrar </h1>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  onChange={valorInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={valorInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password "
                  onChange={valorInput}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button className="mt-4 btn btn-success ">Sign in</Button>
        </Container>
      </Form>
    </div>
  );
};
