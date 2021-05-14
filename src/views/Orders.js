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
import OrderStatusTable from "./components/OrderStatusTable";
import { AppContext } from '../AppContext'
import Loader from './components/Loader'

const Orders = (props) => {
  const tableHeader = ['Product Name', 'Description', 'Status', 'Price']
  const tableDisplayData = ['name', 'description', 'status', 'price']
  const context = useContext(AppContext)
  const { isLoading, getAllOrders, orders } = context
  const tableBody = [
    {
      id: 1,
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      status: 'Cancel',
      price: '$11',
      date: '19-01-2021'

    },
    {
      id: 2,
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      status: 'Cancel',
      price: '$11',
      date: '19-01-2021'


    },
    {
      id: 3,
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      status: 'Delivered',
      price: '$11',
      date: '19-01-2021'


    },
    {
      id: 4,
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      status: 'Pending',
      price: '$11',
      date: '19-01-2021'


    },
    {
      id: 5,
      name: 'Small Wig',
      Description: 'Hiiiiii thisis des',
      status: 'Delivered',
      price: '$11',
      date: '19-01-2021'


    }
  ]
  useEffect(() => {
    getAllOrders()

  }, [])
  return (
    <Container fluid className="main-content-container px-4">
            <Loader isloading={isLoading} />

      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <Col md="6">
          <PageTitle sm="4" title="Order Status" className="text-sm-left" />
        </Col>

      </Row>

      <OrderStatusTable props={props} tableHead={tableHeader} tableBody={orders} tableDisplayData={tableDisplayData} />
    </Container>
  );
}

export default Orders
