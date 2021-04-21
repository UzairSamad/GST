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

import PageTitle from "../components/common/PageTitle";
import CategoriesTable from "../components/CategoriesTable";

const Categories = () => {
  const tableHeader = ['#', 'Name']
  const tableDisplayData = ['id', 'name']
  const tableBody = [
    {
      id: 1,
      name: 'Small Wig Wig  Wig Wig 2',
    },
    {
      id: 2,
      name: 'Small Wig Wig  Wig Wig 1',
    },
    {
      id: 3,
      name: 'Small Wig Wig  Wig Wig 3',
    },
    {
      id: 4,
      name: 'Small Wig Wig  Wig Wig 4',
    },
    {
      id: 5,
      name: 'Small Wig Wig  Wig Wig 5',
    }
  ]
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <Col md="4">
          <PageTitle sm="4" title="Categories" className="text-sm-left" />
        </Col>
      </Row>
      <Row style={{ marginLeft: '12px' }} noGutters className="page-header py-4">
        <Col md="4" style={{ marginRight: '10px' }}>
          <FormInput
            id="feEmailAddress"
            type="category"
            placeholder="Create Category"
            style={{ width: '100%' }}
          />
        </Col>
        <Col md="2">
          <Button theme="primary" className="mb-2 mr-1" style={{ width: '120%' }}>
            Add
         </Button>
        </Col>
      </Row>
      <Row style={{ marginLeft: '10px' }}>
        <CategoriesTable tableHead={tableHeader} tableBody={tableBody} tableDisplayData={tableDisplayData} />

      </Row>
    </Container>
  );



}

export default Categories

