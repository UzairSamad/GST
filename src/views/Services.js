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
import { AppContext } from './../AppContext'
const Services = (props) => {
  // First list of posts.
  const initialData = {
    name:'',
    image: "",
    price: '',
    discount: '',
    description: ''
  }
  const context = useContext(AppContext)
  const {
    services,
    getServices,
    createService,
    updateService } = context
  const [PostsListOne, setPostOneList] = useState([
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      category: "Hair Cut",
      categoryTheme: "dark",
      author: "Anna Kunis",
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Conduct at an replied removal an amongst",
      body:
        "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
      date: "28 February 2019",
      price: '$20'
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      category: "All over color",
      categoryTheme: "info",
      author: "James Jamerson",
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Off tears are day blind smile alone had ready",
      body:
        "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      date: "29 February 2019",
      price: '$20'
    },
    {
      backgroundImage: require("../images/content-management/3.jpeg"),
      category: "Deep Conditioning Treatment",
      categoryTheme: "royal-blue",
      author: "Jimmy Jackson",
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Difficult in delivered extensive at direction",
      body:
        "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      date: "29 February 2019",
      price: '$20'
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      category: "Business",
      categoryTheme: "Highlights",
      author: "John James",
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "It so numerous if he may outlived disposal",
      body:
        "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
      date: "29 February 2019",
      price: '$20'
    },
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      category: "social services",
      categoryTheme: "warning",
      author: "John James",
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "It so numerous if he may outlived disposal",
      body:
        "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
      date: "29 February 2019",
      price: '$20'
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      category: "Waxing",
      categoryTheme: "warning",
      author: "John James",
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "It so numerous if he may outlived disposal",
      body:
        "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
      date: "29 February 2019",
      price: '$20'
    },
  ])

  console.log(services,'servicesservicesservices')
  useEffect(()=>{
    getServices()
  },[])
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <Col md="4">
          <PageTitle sm="4" title="Services" className="text-sm-left" />
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
          <Button onClick={_ => props.history.push({ pathname: '/add-editService', state: { title: "Add Service", data: initialData } })} theme="primary" className="mb-2 mr-1" style={{ width: '85%' }}>
            Add
         </Button>
        </Col>
      </Row>
      <Row>
        {services.map((post, idx) => (
          <Col lg="4" md="6" sm="12" className="mb-4" key={idx}>
            <Card
              style={{ cursor: 'pointer' }}
              onClick={_ => props.history.push({ pathname: '/add-editService', state: { title: "Edit Service", data: post } })}
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
