/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState, useContext } from "react";
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
import Avatar from '@material-ui/core/Avatar';
import { AppContext } from '../../AppContext'
import ErrorHelper from '../components/Alert/ErrorHelper'
import Loader from '../components/Loader'
function EditOrder(props) {

    const context = useContext(AppContext)
    const { updateProductStatus, isLoading } = context
    const { state } = props.location
    const { title, data } = state
    console.log(data, 'datadata')
    const [productData, setProductData] = useState({
        name: data.name,
        price: data.price,
        description: data.Description,
        status: data.orderDetails.status,
        date: data.orderDetails.Date,
        category: data.category,
        orderStatus: data.status || 'Pending'
    })
    const [orderStatus, setOrderStatus] = useState(data.orderDetails.status)

    const handleConfirm = () => {
        updateProductStatus({ status: orderStatus }, data.orderDetails._id)
    }
    return (
        <Container fluid className="main-content-container px-4">
            <Loader isLoading={isLoading} />

            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title={`Change Order Status`} className="text-sm-left" />
            </Row>

            <Row>
                <Col sm="12" md="12">
                    <Form>
                        <Row>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <label htmlFor="Product Name">Status</label>
                                    <FormSelect onChange={e => setOrderStatus(e.target.value)} value={orderStatus}>
                                        <option>Pending</option>
                                        <option>Reject</option>
                                        <option>Deliverd</option>
                                    </FormSelect>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <label htmlFor="Price">Date</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.date} placeholder="Date" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>

                        </Row>
                    </Form>
                </Col>
            </Row>

            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title={`Current Order`} className="text-sm-left" />
            </Row>

            <Row>
                {data.orderDetails.order.map((data, index) => {
                    return (

                                <Col md="2" sm="12" style={{
                                    backgroundColor: 'white',
                                    textAlign: 'center',
                                    borderRadius: '10px',
                                    boxShadow:' 2px 2px silver',
                                    padding: '8px',
                                }} >
                                    <div style={{elevation:4}}>
                                        <img src={data.image} style={{ height: 100, width: "80%",borderRadius:'5px' }} />
                                        <span style={{display:'block'}}>{`Product Name: ${data.name}`}</span>
                                        <span>{`Quantity: ${data.count}`}</span>
                                    </div>
                                </Col>
                        

                    )

                })

                }
            </Row>
            <Row >
                <Col sm="12" md="12" className="text-center">
                    <Button style={{ width: '20%' }} theme="primary" className="mb-2 mr-1" onClick={_ => handleConfirm()}>
                        Update
                  </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default EditOrder;
