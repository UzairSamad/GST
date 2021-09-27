import React, { useState } from "react";
import {
    Container, Row, Col, Card, CardHeader, CardBody, Button,
} from "shards-react";

import PageTitle from "./PageTitle";

const CustomTable = ({ tableHead, tableBody, tableDisplayData, onEditNavigate, props, titleEdit, handleDelete, searchText }) => {
    const [tableData, setTableData] = useState(tableBody)
    const handleEdit = (rowData) => {
        props.history.push({
            pathname: onEditNavigate,
            state: { data: rowData, title: titleEdit }
        })
    }
    React.useEffect(() => {

        setTableData(tableBody)

        if (searchText.length > 0) {
            const results = tableData.filter(item => {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setTableData(results)
        }
    }, [searchText, tableBody])

    const onDelete = (data) => {
        handleDelete(data._id)
    }
    return (
        <Container fluid className="main-content-container" style={{ marginLeft: '-10px' }}>
            {/* Page Header */}
            <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardBody className="p-0 pb-3" style={{ overflow: 'auto' }}>
                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        {
                                            tableHead.map(val => {
                                                return (
                                                    <th scope="col" className="border-0" style={{fontSize:'12px'}}>
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
                                            return (
                                                <tr style={{ cursor: 'pointer' }} >
                                                    {
                                                        tableDisplayData.map(val => {
                                                            console.log(val, 'row[val]row[val]')
                                                            return (
                                                                <>
                                                                {
                                                                    val == 'detailButton' ?
                                                                    <td style={{ paddingTop: '30px', minWidth: '50px' }}>
                                                                        <Button style={{backgroundColor:'#1ab394'}} >
                                                                            Edit 
                                                                        </Button>
                                                                    </td>
                                                                    : 
                                                                    <td style={{minWidth:val == 'guide'?'120px':val == 'testStart' ? '180px':null ,paddingTop: '30px',fontSize:'12px',width:'10px' }}>
                                                                        {row[val]}
                                                                    </td>
                                                                    }
                                                                   
                                                                </>

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
}
export default CustomTable;
