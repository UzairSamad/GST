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
  FormInput,
  FormTextarea,
  InputGroup,
  FormGroup
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

const CustomerSupport = (props) => {
  const [showMessage, setShowMessage] = React.useState(false)
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Customer Support" className="text-sm-left" />
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
                  <Col style={{ cursor: "pointer" }} onClick={_ => setShowMessage(true)} className="border containersssss">
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
        <Col md="8" >
          {
            showMessage ?
              <>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom: '1px solid #0000000A', paddingBottom: '15px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <img
                      className="user-avatar rounded-circle mr-2"
                      src="https://www.pngjoy.com/pngm/186/3682484_harambe-face-sample-avatar-hd-png-download.png" alt="User Avatar"
                      style={{ width: '45px', height: '45px' }}
                    />
                    <div>
                      <p style={{marginBottom:'0px'}} >David James</p>
                      <p style={{ fontSize: '14px' }}>to me</p>
                    </div>

                  </div>

                  <p style={{ marginTop: '5px', alignSelf: 'flex-end', textAlign: 'flex-end' }}>12/02/2021</p>
                </div>
                <p>Hi,David</p>
                <p> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid. Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum</p>
                <FormGroup>
                  <InputGroup className="mb-3">
                    <FormTextarea rows="5" placeholder="Reply" />
                  </InputGroup>
                </FormGroup>


              </>
              :
              <p style={{ marginTop: '20%', marginLeft: '35%', fontSize: '22px' }}>
                Select A Message
             </p>
          }

        </Col>
      </Row>
    </Container>
  );
}

export default CustomerSupport;
