import React, { useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

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
    }, [searchText,tableBody])

    const onDelete = (data) => {
        handleDelete(data._id)
    }
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
                                        {tableDisplayData.length > 2 ?

                                            <th scope="col" colspan={2}
                                                style={{ textAlign: 'center' }}
                                                className="border-0">
                                                {'Actions'}
                                            </th>
                                            :
                                            <th scope="col" colspan={2}
                                                className="border-0">
                                                {'Actions'}
                                            </th>

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
                                                            return (
                                                                val !== 'image' ? <td style={{ paddingTop: '30px', minWidth: '20px' }}>{row[val]}</td>
                                                                    : <td style={{ minWidth: '20px' }} ><img style={{ height: "55px", width: '85px' }} src={row[val]} /></td>
                                                            )
                                                        })
                                                    }
                                                    <td onClick={_ => handleEdit(row)} style={{ paddingTop: '30px', textAlign: 'center', cursor: 'pointer' }}>
                                                        <i class="material-icons">edit</i>
                                                    </td>
                                                    <td onClick={_ => onDelete(row)} style={{ paddingTop: '30px', cursor: 'pointer' }}>
                                                        <i class="material-icons">delete</i>

                                                    </td>
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
