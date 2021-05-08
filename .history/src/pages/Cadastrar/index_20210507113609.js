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
import { cad } from "../../config/cadastrar";

export const Cadastrar = () => {
  const [ dat, setDat ] = useState
  const getData = async () =>{
    try{
      await axios.post(cad).then((response)=>{
        setDat(response.dat)
      })
    }catch(err){
      console.log(err)
    }
  };
  useEffect(()=>{
    getData()
  })
  return (
    <div>
      <h1> Cadastrar </h1>
      <Form>
        <Container>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input
              type="text"
              name="address2"
              id="exampleAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>
          <Row form>
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
          <Button href="/">Sign in</Button>
        </Container>
      </Form>
    </div>
  );
};
