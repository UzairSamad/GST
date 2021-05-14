/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState ,useContext} from "react";
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
    const { updateOrderStatus, isLoading } = context
    const { state } = props.location
    const { title, data } = state
    console.log(data, 'datadata')
    const [productData, setProductData] = useState({
        name: data.name,
        price: data.price,
        description: data.Description,
        status: data.status,
        date: data.date,
        category: data.category,
        orderStatus: data.status || 'Pending'
    })
    const [orderStatus, setOrderStatus] = useState(data.status || 'Pending')


    const handleConfirm = () => {
        updateOrderStatus({status:productData.orderStatus},data._id)
    }
    return (
        <Container fluid className="main-content-container px-4">
            <Loader isLoading={isLoading} />

            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title={`Change Order Status`} className="text-sm-left" />
            </Row>
            <Row>
                <Col lg="12" md="6" sm="12" className="text-md-center">
                    <Avatar alt="Remy Sharp" size='large' className="text-md-center" style={{ width: '90px', height: '90px', marginLeft: '40%', marginBottom: '-5px' }} size src="https://www.pngjoy.com/pngm/186/3682484_harambe-face-sample-avatar-hd-png-download.png" />
                    <i class="material-icons" style={{ cursor: 'pointer', marginLeft: '-5%', marginTop: '-25px', fontSize: '20px' }}>edit</i>
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
                                        <FormInput value={productData.name} disabled={true} placeholder="Product Name" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Price">Price</label>
                                    <InputGroup className="mb-3">
                                        <FormInput value={productData.price} disabled={true} placeholder="Price" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            {/* <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Product Name">Category</label>
                                    <FormSelect value={productData.category}>
                                        <option>Choose ...</option>
                                        <option>Test</option>
                                        <option>Test 1</option>
                                    </FormSelect>
                                </FormGroup>
                            </Col> */}
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Product Name">Status</label>
                                    <FormSelect onChange={e => setOrderStatus(e.target.value)} value={orderStatus}>
                                        <option>Pendeing</option>
                                        <option>Cancel</option>
                                        <option>Deliverd</option>
                                    </FormSelect>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <label htmlFor="Price">Date</label>
                                    <InputGroup className="mb-3">
                                        <FormInput type="date" value={productData.date} placeholder="Date" />
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
                        <label htmlFor="Description" disabled={true}>Description</label>
                        <InputGroup className="mb-3">
                            <FormTextarea value={productData.description} rows="10" placeholder="Description" />
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row >
                <Col sm="12" md="12" className="text-center">
                    <Button style={{ width: '20%' }} theme="primary" className="mb-2 mr-1" onClick={_ => handleConfirm()}>
                        Confirm
                  </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default EditOrder;
