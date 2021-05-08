import React from "react";
import { Col, Form, FormGroup, Label, Input, Container } from "reactstrap";
export const Login = (props) => {
  return (
    <Container>
      <Form>
        <FormGroup row className="mt-4">
          <Label for="email" sm={3} size="lg">
            Email
          </Label>
          <Input type="email" name="email" id="email" placeholder="lg" />
        </FormGroup>
        <FormGroup row className="mt-4">
          <Label for="paswword " sm={1} size="lg">
            Senha
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="default"
          />
        </FormGroup>
      </Form>
    </Container>
  );
};
