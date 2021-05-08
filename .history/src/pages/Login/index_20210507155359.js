import React from "react";
import { Col, Form, FormGroup, Label, Input, Container } from "reactstrap";
export const Login = (props) => {
  return (
    <Form>
      <Container>
        <FormGroup row className="mt-4">
          <Label for="exampleEmail" sm={3} size="lg">
            Email
          </Label>
          <Col sm={6}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="lg"
              bsSize="lg"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="mt-4">
          <Label for="email " sm={3} size="lg">
            Email
          </Label>
          <Col sm={6}>
            <Input
              type="email"
              name="email"
              id="exampleEmail2"
              placeholder="default"
            />
          </Col>
        </FormGroup>
      </Container>
    </Form>
  );
};
