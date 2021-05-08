import React from "react";
import { Col, Form, FormGroup, Label, Input, Container } from "reactstrap";
export const Login = (props) => {
  return (
    <Form>
      <Container>
        <FormGroup row className="mt-2">
          <Label for="exampleEmail" sm={2} size="lg">
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="lg"
              bsSize="lg"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>
            Email
          </Label>
          <Col sm={10}>
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
