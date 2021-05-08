import React from "react";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
export const Login = (props) => {
  return (
    
      <Form>
        <Card className="card">
        <Container >
        <div className="mt-4 card-body">
          <FormGroup>
            <Label for="email" sm={10}>
              Email
            </Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup className="sm-2">
            <Label for="paswword " sm={10}>
              Senha
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button className="btn btn-success mt-4"> Login </Button>
        </div>
        </Container>
        </Card>
      </Form>
    
  );
};
