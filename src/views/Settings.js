/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
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
  FormTextarea
} from "shards-react";

import PageTitle from "./components/PageTitle";

const Settings = () => {
  const [deliverycharges, setDeliveryCharges] = useState('')
  const [vat, setVat] = useState('')
  const [aboutUs, setAboutUs] = useState('')
  const [privacyPolicy, setPrivacyPolicy] = useState('')
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Settings" className="text-sm-left" />
      </Row>
      <Row>
        <Col sm="12" md="12">
          <p >Delivery Charges and VAT</p>
        </Col>
        <Col sm="12" md="4">
          <FormGroup>
            <label htmlFor="Product Name">Delivery Charges</label>
            <InputGroup className="mb-3">
              <FormInput
                value={deliverycharges} placeholder="Delivery Charges" onChange={e => setDeliveryCharges(e.target.value)} />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col sm="12" md="4">
          <FormGroup>
            <label htmlFor="Product Name">VAT</label>
            <InputGroup className="mb-3">
              <FormInput
                value={vat} placeholder="VAT" onChange={e => setVat(e.target.value)} />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col sm="12" md="4">
        <FormGroup>
            {/* <label htmlFor="Product Name"></label> */}
            <InputGroup className="mb-3">
            <Button style={{ width: '100%' }} theme="primary" >
              Update Deleivery
         </Button>
         </InputGroup>
          </FormGroup>

        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm="12" md="12">
          <p >About Us</p>
          <FormGroup>
            <InputGroup >
              <FormTextarea value={aboutUs} onChange={e => setAboutUs(e.target.value)} rows="10" placeholder="About Us" />
            </InputGroup>
          </FormGroup>
        </Col>


      </Row>
      <Row>
        <Col sm="12" md="9">
        </Col>
        <Col sm="12" md="3">
          <Button style={{ width: '100%' }} theme="primary" className="mb-2">
            Update About Us
         </Button>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="12">
          <p >Privacy Policy</p>
          <FormGroup>
            <InputGroup >
              <FormTextarea value={privacyPolicy} onChange={e => setPrivacyPolicy(e.target.value)} rows="10" placeholder="Privacy Policy" />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="9">
        </Col>
        <Col sm="12" md="3">
          <Button style={{ width: '100%' }} theme="primary" className="mb-2">
            Update Privacy Policy
         </Button>
        </Col>
      </Row>


    </Container >
  );
}

export default Settings;
