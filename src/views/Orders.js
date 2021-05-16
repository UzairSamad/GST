/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useContext,useState } from "react";
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
  const tableHeader = ['Order Id', 'Payment Type', 'Status', 'Total Price', 'Date']
  const [searchText, setSearchText] = useState('')

  const tableDisplayData = ['name', 'description', 'status', 'price']
  const context = useContext(AppContext)
  const { isLoading, getAllOrders, orders } = context
 
  useEffect(() => {
    getAllOrders()

  }, [])
  return (
    <Container fluid className="main-content-container px-4">
            <Loader isloading={isLoading} />

      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <Col md="4">
          <PageTitle sm="12" title="Order Status" className="text-sm-left" />
        </Col>
        <Col md="6">
          <FormInput
            id="feEmailAddress"
            type="email"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          </Col>

      </Row>

      <OrderStatusTable searchText={searchText} props={props} tableHead={tableHeader} tableBody={orders} tableDisplayData={tableDisplayData} />
    </Container>
  );
}

export default Orders
