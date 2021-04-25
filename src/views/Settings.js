/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  FormGroup,
  InputGroup,
  FormInput,
  FormCheckbox
} from "shards-react";

import PageTitle from "./components/PageTitle";

const Settings = () => {
  const [state, setState] = React.useState({
    orange: false,
    lemon: false,
    kiwi: false
  })

  const handleChange = (e, fruit) => {
    const newState = {};
    newState[fruit] = !state[fruit];
    setState({ ...state, ...newState });
  }

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Settings" className="text-sm-left" />
      </Row>
      <Row>
        <Col sm="12" md="4">
          <p style={{ border: "1px solid", textAlign: 'center', padding: '5px', width: '80%' }}>Set Delivery Charges</p>
        </Col>
        <Col sm="12" md="2">
          <p style={{ border: "1px solid", textAlign: 'center', padding: '5px', width: '70%' }}>10%</p>
        </Col>
        <Col sm="12" md="2">
          <FormCheckbox
            checked={state.orange}
            onChange={e => handleChange(e, "orange")}
          >
            Yes
        </FormCheckbox>
        </Col>
        <Col sm="12" md="2">
          <FormCheckbox
            checked={state.lemon}
            onChange={e => handleChange(e, "lemon")}
          >
            No
        </FormCheckbox>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="4">
          <p style={{ border: "1px solid", textAlign: 'center', padding: '5px', width: '80%' }}>Set Vat on the Product</p>
        </Col>
        <Col sm="12" md="2">
          <p style={{ border: "1px solid", textAlign: 'center', padding: '5px', width: '70%' }}>10%</p>
        </Col>
        <Col sm="12" md="2">
          <FormCheckbox
            checked={state.orange}
            onChange={e => handleChange(e, "orange")}
          >
            Yes
        </FormCheckbox>
        </Col>
        <Col sm="12" md="2">
          <FormCheckbox
            checked={state.lemon}
            onChange={e => handleChange(e, "lemon")}
          >
            No
        </FormCheckbox>
        </Col>

      </Row>


    </Container >
  );
}

export default Settings;
