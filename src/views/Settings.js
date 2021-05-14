/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useState } from "react";
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
import { createResource, deleteResource, getResource, updateResource } from '../WebApiServices/SimpleApiCalls';
import { get_settings, update_Aboutus, update_deliveryCharges, update_privacyPolicy } from '../WebApiServices/WebServices';
import Loader from './components/Loader'
import successHelper from './components/Alert/successHelper'
import ErrorHelper from './components/Alert/ErrorHelper'

import PageTitle from "./components/PageTitle";

const Settings = () => {
  const [deliverycharges, setDeliveryCharges] = useState('')
  const [vat, setVat] = useState('')
  const [aboutUs, setAboutUs] = useState('')
  const [privacyPolicy, setPrivacyPolicy] = useState('')
  const [isLoading, setIsloading] = useState(false);




  useEffect(() => {
    getSettings()
  }, [])



  const updateAboutUs = async (data, id) => {
    setIsloading(true)
    try {
      let res = await updateResource(`${update_Aboutus}/${id}`, data)
      successHelper.handleSuccess('Product Updated Successfully', true);
      window.location = '/products'

      setIsloading(false);
    } catch (error) {
      ErrorHelper.handleErrors(error, true);
      setIsloading(false);
    }
  }
  const updatePrivacyPolicy = async (data, id) => {
    setIsloading(true)
    try {
      let res = await updateResource(`${update_privacyPolicy}/${id}`, data)
      successHelper.handleSuccess('Product Updated Successfully', true);
      window.location = '/products'
      setIsloading(false);
    } catch (error) {
      ErrorHelper.handleErrors(error, true);
      setIsloading(false);
    }
  }
  const updateDeliveryCharges = async (data, id) => {
    setIsloading(true)
    try {
      let res = await updateResource(`${update_deliveryCharges}/${id}`, data)
      successHelper.handleSuccess('Product Updated Successfully', true);
      window.location = '/products'

      setIsloading(false);
    } catch (error) {
      ErrorHelper.handleErrors(error, true);
      setIsloading(false);
    }
  }

  const getSettings = async () => {
    setIsloading(true)
    try {
      let res = await getResource(get_settings);
      console.log(res, 'resssssssssss')
      setIsloading(false);
    } catch (error) {
      ErrorHelper.handleErrors(error, true);
      setIsloading(false);
    }
  }

  return (
    <Container fluid className="main-content-container px-4">
      <Loader isLoading={isLoading} />
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
          <FormGroup className="mb-3">
            <label className="mb-4" htmlFor="Product Name"  ></label>
            <InputGroup className="mb-3">
              <Button style={{ width: '100%' }} theme="primary" >
                {`Update Deleivery Charges & Vat`}
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
