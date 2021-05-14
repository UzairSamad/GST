/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useContext, useEffect, useState } from "react";
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
import { Link, withRouter } from "react-router-dom"
import PageTitle from "./components/PageTitle";
import { AppContext } from '../AppContext'
import Loader from "./components/Loader"

const Services = (props) => {
  // First list of posts.
  const initialData = {
    name: '',
    image: "",
    price: '',
    discount: '',
    description: ''
  }
  const context = useContext(AppContext)
  const {
    products,
    getProduct,
    isLoading } = context


  useEffect(() => {
    getProduct()
  }, [])
  return (
    <Container fluid className="main-content-container px-4">
      <Loader isloading={isLoading} />
      <Row noGutters className="page-header py-4">
        <Col md="6">
          <PageTitle sm="4" title=" All Products" className="text-sm-left" />
        </Col>

        <Col md="4">
          <FormInput
            id="feEmailAddress"
            type="email"
            placeholder="Search"
          />          </Col>
        <Col md="4">
        </Col>
        <Col md="2">
          {/* <Button onClick={_ => props.history.push({ pathname: '/add-editService', state: { title: "Add Promtion", data: initialData } })} theme="primary" className="mb-2 mr-1" style={{ width: '85%' }}>
            Add
         </Button> */}
        </Col>
      </Row>
      <Row>

        <Col>
          <p>Please Select Product to add promotion</p>
        </Col>
      </Row>
      <Row>
        {products.map((post, idx) => (
          <Col lg="4" md="6" sm="12" className="mb-4" key={idx}>
            <Card
              style={{ cursor: 'pointer' }}
              onClick={_ => props.history.push({ pathname: '/addEdit-promocode', state: { title: "Add Promotion & Deals", data: post } })}
              small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <p style={{ color: '#FFFF' }}
                  className={`card-post__category `}
                >
                  {post.name}
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default withRouter(Services);
