import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
export const Login = (props) => {
  return (
    <Container>
      <Form className="card">
        <FormGroup row className="mt-4 sm-4">
          <Label for="email" size="lg">
            Email
          </Label>
          <Input type="email" name="email" id="email" placeholder="lg" />
        </FormGroup>
        <FormGroup row className="mt-4">
          <Label for="paswword " size="lg">
            Senha
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="default"
          />
        </FormGroup>
        <Button className="btn btn-success mt-4"> Login </Button>
      </Form>
    </Container>
  );
};
