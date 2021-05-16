/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useContext, useEffect } from "react";
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
import { AppContext } from "../AppContext";

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

  const context = useContext(AppContext)
  const { getCustomerCare, customercare } = context

  console.log(customercare, "GET_CUSTOMMMMMM");

  useEffect(() => {
    getCustomerCare()
  }, [])

  const [showMessage, setShowMessage] = React.useState(false)
  const [userDetails, setUserDetails] = React.useState({
    date: "",
    question: "",
    userName: "",
    __v: 0,
    _id: ""
  })
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
            customercare.map((data) => {
              return (
                <>
                  <Col style={{ cursor: "pointer" }} onClick={_ => {
                    setShowMessage(true)
                    setUserDetails(data)
                  }
                  } className="border containersssss">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                      {/* <div style={{ marginTop: "20%" }}>
                        <img src={data.img} class="rounded-circle user_img" />
                      </div> */}
                      <div class="user_info" style={{ marginTop: "2%", marginLeft: "10px" }}>
                        <span>{`Name: ${data.userName}`}</span><br />
                        <span>{`Title: ${data.title}`}</span>
                      </div>
                      <div class="user_info" style={{ marginTop: "50px" }}>
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

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom: '1px solid #0000000A', paddingBottom: '15px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>

                    {/* <img
                      className="user-avatar rounded-circle mr-2"
                      src="https://www.pngjoy.com/pngm/186/3682484_harambe-face-sample-avatar-hd-png-download.png" alt="User Avatar"
                      style={{ width: '45px', height: '45px' }}
                    /> */}
                    <div>
                      <p style={{ marginBottom: '0px' }} >To: Admin</p>
                      <p style={{ marginBottom: '0px' }} >From : {userDetails.userName}</p>
                      {/* <p style={{ fontSize: '14px' }}>to me</p> */}
                    </div>

                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <p style={{ marginTop: '5px', alignSelf: 'flex-end', textAlign: 'flex-end' }}>{userDetails.date}</p>
                    <i class="material-icons" style={{ fontSize: '20px', cursor: 'pointer', marginTop: '-20px', marginLeft: '-10px', color: 'red' }} onClick={_ => setShowMessage(false)}>cancel</i>
                  </div>


                </div>
                <p >{`Title : ${userDetails.title}`}</p>
                <p>{`${userDetails.question}`}</p>



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
