/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useContext, useState } from "react";
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

import PageTitle from "./PageTitle";
import { AppContext } from '../../AppContext'
function AddProduct(props) {
    console.log(props, 'props')
    const { state } = props.location
    const { title, data } = state
    const context = useContext(AppContext)
    const { createProduct        , updateProduct } = context
    const [productData, setProductData] = useState({
        name: data.name,
        price: data.price,
        description: data.description
    })
    const handleCreate = () => {
        let data = {
            name: productData.name,
            image: "adrhtadasdsadtesttttttt",
            price: productData.price,
            discount: 2.00,
            description: productData.description,
            category: "men"
        }
        createProduct(data)
    }

    const handleEdit = () => {
        updateProduct(productData, data._id)
    }



    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title={title} className="text-sm-left" />
            </Row>
            <Row>
                <Col lg="12" md="6" sm="12" className="text-md-center">
                    <div className="drag-areaaaa text-md-center " style={{ marginLeft: '30%', marginBottom: '15px' }}>
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
                                    <label htmlFor="Product Name">Product Name</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.name} onChange={e => setProductData({ ...productData, name: e.target.value })} placeholder="Product Name" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Price">Price</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.price} onChange={e => setProductData({ ...productData, price: e.target.value })} placeholder="Price" />
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
                            <FormTextarea value={productData.description} onChange={e => setProductData({ ...productData, description: e.target.value })} rows="10" placeholder="Description" />
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row >
                <Col sm="12" md="12" className="text-center">
                    {title == 'Edit Product' ?
                        <Button style={{ width: '20%' }} theme="primary" onClick={handleEdit} className="mb-2 mr-1">
                            Edit
                          </Button>
                        :
                        <Button style={{ width: '20%' }} theme="primary" onClick={handleCreate} className="mb-2 mr-1">
                            Add
                      </Button>

                    }
                </Col>
            </Row>
        </Container>
    );
}

export default AddProduct;
