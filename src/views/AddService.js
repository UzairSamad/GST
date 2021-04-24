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
    FormInput
} from "shards-react";
import "./styles/service.css"
import PageTitle from "../components/common/PageTitle";

class AddService extends React.Component {
    render() {
        return (
            <Container fluid className="main-content-container px-4" style={{backgroundColor:"white"}}>
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Add Service" className="text-sm-left" />
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
                <Row className="mt-4">
                    <Col md="4">
                        <div>Product Name</div>
                        <FormInput
                            className="mt-2"
                            id="feEmailAddress"
                            type="email"
                            placeholder="Small Wig"
                        />
                    </Col>
                    <Col md="4">
                        <div>Price</div>
                        <FormInput
                            className="mt-2"
                            id="feEmailAddress"
                            type="email"
                            placeholder="10.00"
                        />
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md="12">
                        <div>Description</div>
                        <FormInput
                            className="mt-2"
                            id="feEmailAddress"
                            type="email"
                            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lm Ipsum."
                        />
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md="12" className="text-md-center text-sm-center " style={{width:"100%"}}>
                        <Button className="block mb-3 text-sm-center">
                            Add
                       </Button>
                    </Col>
                </Row>


            </Container >
        );
    }
}

export default AddService;
