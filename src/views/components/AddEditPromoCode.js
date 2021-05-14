/* eslint jsx-a11y/anchor-is-valid: 0 */
import axios from "axios"

import React, { useState, useEffect, useRef, useContext } from "react";
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
import { AppContext } from '../../AppContext'
import Loader from './Loader'
import ErrorHelper from './Alert/ErrorHelper'

function AddPromocode(props) {
    const context = useContext(AppContext)
    const { createPromotion, isLoading, promotions, updatePromotion, } = context
    const imageRef = useRef()
    const { state } = props.location
    const { title, data } = state
    const [productData, setProductData] = useState({
        name: data.name,
        price: data.price,
        description: data.description,
        afterPrice: data.afterPrice || '' ,
        image: data.image,
        category: data.category,
        discount: data.discount
    })


    const onChangePicture = async (e, index) => {
        const form = new FormData();
        form.append("file", e.target.files[0]);
        form.append("upload_preset", "gu8ylv22");
        try {
            let res = await axios.post("https://api.cloudinary.com/v1_1/dhtjlhqw1/upload", form)
            if (res) {
                console.log(res.data.secure_url, "RESSSSSSSSSSSSSSSSS");
                setProductData({ ...productData, image: res.data.secure_url })
            }
        } catch (error) {
            console.log(error, "ERRRRR=>>>>>");
        }

    };

    const handleSubmit = () => {
        if (productData.afterPrice == '' || productData.afterPrice < 1) {
            ErrorHelper.handleErrors('After Price must be greater than 0', true)
        } else {
            if (title == 'Edit PromoCode and Deals') {
                updatePromotion({ afterPrice: productData.afterPrice }, data._id)
            } else {
                createPromotion(productData)

            }
        }
    }
    return (
        <Container fluid className="main-content-container px-4">
            <Loader isloading={isLoading} />

            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title={title} className="text-sm-left" />
            </Row>
            <Row>
                <Col lg="12" md="6" sm="12" className="text-md-center">
                    {productData.image == null ?
                        <div className="drag-areaaaa text-md-center " style={{ marginLeft: '30%', marginBottom: '15px' }}>

                            <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                            <header>Drag & Drop to Upload File</header>
                            <span>OR</span>
                            <button onClick={() => imageRef.current.click()}>Browse File</button>
                            <input type="file" hidden ref={imageRef} onChange={(e) => onChangePicture(e)} />
                        </div>
                        :
                        <div style={{ width: '50%', marginLeft: '25%' }}>
                            <img style={{ width: '150px', height: '150px' }} src={productData.image} />
                            {/* <p onClick={() => imageRef.current.click()} style={{ cursor: 'pointer', marginLeft: '200px' }}>
                                <i class="material-icons">edit</i>
                            </p> */}
                            <input type="file" hidden ref={imageRef} onChange={(e) => onChangePicture(e)} />

                        </div>
                    }

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
                                        <FormInput disable={true} value={productData.name} placeholder="Product Name" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Before Price">Before Price</label>
                                    <InputGroup className="mb-3">
                                        <FormInput disable={true} value={productData.price} placeholder="Before Price" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="After Price">After Price</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.afterPrice} placeholder="After Price" onChange={e => setProductData({ ...productData, afterPrice: e.target.value })} />
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
                            <FormTextarea disable={true} value={productData.description} rows="10" placeholder="Description" />
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row >
                <Col className="text-md-center text-sm-center " sm="12" md="12">
                    <Button style={{ width: '20%' }} theme="primary" className="mb-2 mr-1" onClick={e => handleSubmit()}>
                        Add
                  </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddPromocode;
