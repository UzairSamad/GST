import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "./common/PageTitle";

const OrderTable = ({ tableHead, tableBody, tableDisplayData }) => (
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
                                        return (
                                            <tr>
                                                {
                                                    tableDisplayData.map(val => {
                                                        return (
                                                            val !== 'status' ? <td style={{ paddingTop: '10px', minWidth: '20px' }}>{row[val]}</td>
                                                                : <td style={{ minWidth: '20px', paddingTop: '10px' }} >
                                                                    <span class="dot" style={{
                                                                        backgroundColor:
                                                                            row[val] == 'Cancel' ? '#e53935' :  
                                                                            row[val] == 'Pending' ? '#FFA000':"#388E3C"


                                                        }}></span>
                                                                    {row[val]}
                                                                </td>
                                                        )
                                                    })
                                                }
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

export default OrderTable;
