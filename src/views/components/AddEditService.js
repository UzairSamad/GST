/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState, useRef, useContext } from "react";
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
import "../styles/service.css"
import { AppContext } from '../../AppContext'
import axios from "axios"
import ErrorHelper from '../components/Alert/ErrorHelper'



function EditAppoitment(props) {
    const imageRef = useRef()

    console.log(props, 'props')
    const { state } = props.location
    const { title, data } = state
    const context = useContext(AppContext)
    const {
        createService,
        updateService,
    } = context
    const [productData, setProductData] = useState({
        name: data.name || '',
        image: data.image || null,
        price: data.price || '',
        discount: data.discount || '',
        description: data.description || ''
    })

    const handleEdit = () => {
        if (data.name == '') {
            ErrorHelper.handleErrors('Service Name is required', true)
        } else if (data.price == '') {
            ErrorHelper.handleErrors('Service Price is required', true)

        } else {
            updateService(productData, data._id)
        }
    }

    const handleSubmit = () => {
        let data = {
            name: productData.name,
            image: productData.image,
            price: productData.price,
            discount: productData.discount,
            description: productData.description
        }
        if (data.name == '') {
            ErrorHelper.handleErrors('Service Name is required', true)
        } else if (data.price == ' ') {
            ErrorHelper.handleErrors('Service Price is required', true)

        } else {
            createService(data)
        }
    }
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


    return (
        <Container fluid className="main-content-container px-4">
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
                            <p onClick={() => imageRef.current.click()} style={{ cursor: 'pointer', marginLeft: '200px' }}>
                                <i class="material-icons">edit</i>
                            </p>
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
                                    <label htmlFor="Service Name">Service Name</label>
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
                                    <label htmlFor="Price">Discount</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.discount} onChange={e => setProductData({ ...productData, discount: e.target.value })} placeholder="Discount" />
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
                            <FormTextarea value={productData.description} onChange={e => setProductData({ ...productData, description: e.target.value })} rows="10" placeholder="Description" />
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row >
                <Col className="text-md-center text-sm-center " sm="12" md="12">
                    {title == 'Add Service' ? <Button onClick={handleSubmit} style={{ width: '20%' }} theme="primary" className="mb-2 mr-1">
                        Add
                  </Button>
                        :
                        <Button onClick={handleEdit} style={{ width: '20%' }} theme="primary" className="mb-2 mr-1">
                            Edit
                  </Button>}
                </Col>
            </Row>
        </Container>
    );
}

export default EditAppoitment;
