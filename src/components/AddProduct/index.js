/* eslint jsx-a11y/anchor-is-valid: 0 */

import React,{useState} from "react";
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
    Button
} from "shards-react";

import Forms from '../components-overview/Forms'
import PageTitle from "../common/PageTitle";

function AddProduct(props) {
    console.log(props,'props')
    const { state } = props.location
    const { title ,data} = state
    const [productData,setProductData] = useState({
        name:data.name,
        price:data.price,
        description:data.Description
    })
    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title={title} className="text-sm-left" />
            </Row>
            <Row>
                <Col sm="12" md="12">
                    <Form>
                        <Row>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Product Name">Product Name</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.name} placeholder="Product Name" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Price">Price</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.price} placeholder="Price" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Product Name">Category</label>
                                    <FormSelect>
                                        <option>Choose ...</option>
                                        <option>Test</option>
                                        <option>Test 1</option>
                                    </FormSelect>
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
                <Col sm="12" md="4">
                    <Button style={{ width: '50%' }} theme="primary" className="mb-2 mr-1">
                        Add
                  </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddProduct;