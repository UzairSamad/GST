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

import PageTitle from "./components/PageTitle";
import CustomTable from "./components/CustomTable.js";


const Products = (props) => {
  const tableHeader = ['#', 'Image', 'Product Name', 'Description', 'Category', 'Price']
  const tableDisplayData = ['id', 'img', 'name', 'Description', 'category', 'price']
  const initialData = {
    name: '',
    price: '',
    description: ''
  }
  const tableBody = [
    {
      id: 1,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      category: 'Women',
      price: '$11',

    },
    {
      id: 2,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      category: 'Women',
      price: '$11',

    },
    {
      id: 3,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      category: 'Women',
      price: '$11',

    },
    {
      id: 4,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      category: 'Women',
      price: '$11',

    },
    {
      id: 5,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      category: 'Women',
      price: '$11',

    }
  ]
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <Col md="4">
          <PageTitle sm="4" title="Products" className="text-sm-left" />
        </Col>
        <Col md="4">
          <FormInput
            id="feEmailAddress"
            type="email"
            placeholder="Search"
          />          </Col>
        <Col md="2">
        </Col>
        <Col md="2">
          <Button onClick={_ => props.history.push({ pathname: '/add-editproduct', state: { title: "Add Product",data:initialData } })} theme="primary" className="mb-2 mr-1" style={{ width: '85%' }}>
            Add
         </Button>
        </Col>
      </Row>

      <CustomTable titleEdit='Edit Product' props={props} onEditNavigate='/add-editproduct' tableHead={tableHeader} tableBody={tableBody} tableDisplayData={tableDisplayData} />
    </Container>
  );
}

export default Products
