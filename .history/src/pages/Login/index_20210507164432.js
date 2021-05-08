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
      <Form>
        <div className="mb-3">
          <FormGroup>
            <Label for="email" size="lg">
              Email
            </Label>
            <Input type="email" name="email" id="email" placeholder="lg" />
          </FormGroup>
          <FormGroup className="sm-2">
            <Label for="paswword " sm={2}>
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
        </div>
      </Form>
    </Container>
  );
};
