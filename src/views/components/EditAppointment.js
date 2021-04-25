/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Form,
    FormInput,
    FormSelect,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Container,
    FormTextarea,
    Button,
    
} from "shards-react";

import PageTitle from "./PageTitle";
import "../styles/service.css"


function AddService(props) {
    console.log(props, 'props')
    const { state } = props.location
    const { title, data } = state
    const [productData, setProductData] = useState({
        name: data.title,
        price: data.price,
        description: data.body
    })

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title={`Edit Appointment`} className="text-sm-left" />
            </Row>
            <Row>
                <Col lg="12" md="6" sm="12" className="text-md-center">
                    <div className="drag-areaaaa text-md-center " >
                        <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                        <header>Drag & Drop to Upload File</header>
                        <span>OR</span>
                        <button>Browse File</button>
                        <input type="file" hidden />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12">
                    <Form>
                        <Row>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="E mail">E mail</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.name} placeholder="E mail" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Appointment">Appointment</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.price} placeholder="Appointment" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Phone Number">Phone Number</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.price} placeholder="Phone Number" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Appointment Date">Appointment Date</label>
                                    <InputGroup className="mb-3">
                                        <FormInput type='date' value={productData.price} placeholder="Appointment Date" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12">
                    <FormGroup>
                        <label htmlFor="Description">Description</label>
                        <InputGroup className="mb-3">
                            <FormTextarea value={productData.description} rows="10" placeholder="Description" />
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row >
                <Col className="text-md-center text-sm-center " sm="12" md="12">
                    <Button style={{ width: '20%' }} theme="primary" className="mb-2 mr-1">
                        Confirm
                  </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddService;