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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../config/";

export const Cadastrar = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    city:"",
    zip:"",
    state:"",

  });

  const valorInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  
  const cadUser = async (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h1> Cadastrar </h1>
      <Form onSubmit={cadUser}>
        <Container>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
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
                  id="examplePassword"
                  placeholder="password "
                  onChange={valorInput}/>
              </FormGroup>
            </Col>
            <Col md={6}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleAddress"
              placeholder="your name"
              onChange={valorInput}/>
          </FormGroup>
          </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Check me out
            </Label>
          </FormGroup>
          <Button >Sign in</Button>
        </Container>
      </Form>
    </div>
  );
};
