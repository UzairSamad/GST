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
import "./styles/appointment.css"


const data = [
  {
    id: 1,
    img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
    name: 'David James',
    Description: 'Hiiiiii thisis des',
    date: "5 Jan"
  },
  {
    id: 1,
    img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
    name: 'David James',
    Description: 'Hiiiiii thisis des',
    date: "5 Jan"
  },
  {
    id: 1,
    img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
    name: 'David James',
    Description: 'Hiiiiii thisis des',
    date: "5 Jan"
  },
  {
    id: 1,
    img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
    name: 'David James',
    Description: 'Hiiiiii thisis des',
    date: "5 Jan"
  },
  {
    id: 1,
    img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
    name: 'David James',
    Description: 'Hiiiiii thisis des',
    date: "5 Jan"
  },

]

const Appointments = (props) => {

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Appointments" className="text-sm-left" />
      </Row>
      <Row>
        <Col md="4" style={{ border: 1 }}>
          <FormInput
            placeholder="Search here"
          />
          {
            data.map((data) => {
              return (
                <>
                  <Col style={{cursor:"pointer"}} onClick={_ => props.history.push({ pathname: '/edit-appointment', state: { data: data } })} className="border containersssss">
                    <div class="d-flex vertical-center">
                      <div style={{ marginTop: "20%" }}>
                        <img src={data.img} class="rounded-circle user_img" />
                      </div>
                      <div class="user_info" style={{ marginTop: "15%", marginLeft: "10px" }}>
                        <span>{data.name}</span><br />
                        <span>{data.Description}</span>
                      </div>
                      <div class="user_info" style={{ marginTop: "15%", marginLeft: "10px" }}>
                        <span>{data.date}</span>
                      </div>
                    </div>
                  </Col>

                </>
              )
            })
          }
        </Col>
        <Col style={{marginTop:'15%'}} md="8" className="text-md-center">
         Select a appointment
        </Col>
      </Row>
    </Container>
  );
}

export default Appointments;
