import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "./PageTitle";

const OrderTable = ({ tableHead, tableBody, tableDisplayData, props }) => {
    console.log(tableBody,tableDisplayData, "tableBodytableBodytableBodytableBody");
   return (
        <Container fluid className="main-content-container" style={{ marginLeft: '-10px' }}>
            {/* Page Header */}
            <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardBody className="p-0 pb-3">
                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        {
                                            tableHead.map(val => {
                                                return (
                                                    <th scope="col" className="border-0">
                                                        {val}
                                                    </th>

                                                )
                                            })

                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        tableBody.map(row => {
                                            console.log(row,"rowrowrowrowrowrow");
                                            return (
                                                <tr style={{ cursor: 'pointer' }} onClick={_ => props.history.push({ pathname: "editorder", state: { data: row } })}>
                                                 <td>{row.orderDetails.orderId}</td>
                                                 <td>{row.orderDetails.paymentType}</td>
                                                 <td>{row.orderDetails.status}</td>
                                                 <td>{row.orderDetails.totalBill}</td>
                                                 <td>{row.orderDetails.Date}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderTable;
