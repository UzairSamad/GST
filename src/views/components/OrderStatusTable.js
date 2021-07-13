import React,{useState} from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "./PageTitle";

const OrderTable = ({ tableHead, tableBody, tableDisplayData, props ,searchText}) => {
    console.log(tableBody,tableDisplayData, "tableBodytableBodytableBodytableBody");
    const [tableData, setTableData] = useState(tableBody)


    React.useEffect(() => {

        setTableData(tableBody)

        if (searchText.length > 0) { 
            const results = tableData.filter(item => {
                console.log(item.orderDetails.orderId,'itemitem')
				return item.orderDetails.orderId.includes(searchText);
			});
            setTableData(results)
        }
    }, [searchText,tableBody])
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

                                        tableData.map(row => {
                                            console.log(row,"rowrowrowrowrowrow");
                                            return (
                                                <tr style={{ cursor: 'pointer' }} onClick={_ => props.history.push({ pathname: "editorder", state: { data: row } })}>
                                                 <td>{row.orderDetails.orderId}</td>
                                                 <td>{row.orderDetails.paymentType}</td>
                                                 <td>{row.orderDetails.status}</td>
                                                 {row.orderDetails.paymentType == 'Credit Card'? <td>{row.orderDetails.totalBill/100}</td>:<td>{row.orderDetails.totalBill}</td>}
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
