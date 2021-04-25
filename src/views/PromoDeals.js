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


const PromoCodes = (props) => {
  const tableHeader = ['#', 'Image', 'Product Name', 'Before Price', 'After Price']
  const tableDisplayData = ['id', 'img', 'name', 'bfprice', 'afPrice', ]
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
      bfprice: '$11',
      afPrice:"$5"


    },
    {
      id: 2,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice:"$5"
    },
    {
      id: 3,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice:"$5"

    },
    {
      id: 4,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice:"$5"

    },
    {
      id: 5,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice:"$5"

    }
  ]
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <Col md="4">
          <PageTitle sm="12" title="PromoCode and Deals" className="text-sm-left" />
        </Col>
        <Col md="4">
          <FormInput
            id="feEmailAddress"
            type="email"
            placeholder="Search"
          />          </Col>
      <Col  md="2">
      </Col>
        <Col md="2">
          <Button onClick={_ => props.history.push({ pathname: '/addEdit-promocode', state: { title: "Add PromoCode",data:initialData } })} theme="primary" className="mb-2 mr-1" style={{ width: '85%' }}>
            Add
         </Button>
        </Col>
      </Row>

      <CustomTable titleEdit='Edit PromoCode and Deals' props={props} onEditNavigate='/addEdit-promocode' tableHead={tableHeader} tableBody={tableBody} tableDisplayData={tableDisplayData} />
    </Container>
  );
}

export default PromoCodes
