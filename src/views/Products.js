/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useContext } from "react";
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
import { AppContext } from '../AppContext'
import Loader from './components/Loader'

const Products = (props) => {
  const tableHeader = [ 'Image', 'Product Name', 'Description', 'Category', 'Price']
  const tableDisplayData = [ 'img', 'name', 'description', 'category', 'price']
  const context = useContext(AppContext)
  const { getProduct, isLoading ,products } = context
  const initialData = {
    name: '',
    price: '',
    description: ''
  }


  useEffect(() => {
    getProduct()

  }, [])
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Loader isloading={isLoading} />
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
          <Button onClick={_ => props.history.push({ pathname: '/add-editproduct', state: { title: "Add Product", data: initialData } })} theme="primary" className="mb-2 mr-1" style={{ width: '85%' }}>
            Add
         </Button>
        </Col>
      </Row>

      <CustomTable titleEdit='Edit Product' props={props} onEditNavigate='/add-editproduct' tableHead={tableHeader} tableBody={products} tableDisplayData={tableDisplayData} />
    </Container>
  );
}

export default Products
