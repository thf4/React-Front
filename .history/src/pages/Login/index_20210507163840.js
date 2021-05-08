import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
export const Login = (props) => {
  return (
    <Container>
      <Form className="mt-4">
        <Col>
          <FormGroup size="lg" >
            <Label for="email" >
              Email
            </Label>
            <Input type="email" name="email" id="email" placeholder="lg" />
          </FormGroup>
          <FormGroup className="sm-2">
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
        </Col>
      </Form>
    </Container>
  );
};
