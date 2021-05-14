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
  FormInput,
  FormTextarea,
  InputGroup,
  FormGroup
} from "shards-react";
import { AppContext } from "../AppContext";
import ProfilePic from "../assets/profilePic.jpeg"
import PageTitle from "./components/PageTitle";
import "./styles/appointment.css"
import Loader from './components/Loader'



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

  const context = useContext(AppContext)
  const { appointment, getAllAppointment, updateAppointment ,isLoading} = context
  const [showMessage, setShowMessage] = React.useState(false)
  const [user, setUser] = React.useState({})



  useEffect(() => {
    getAllAppointment()
  }, [])

  const handleAppointment = (value) => {
    updateAppointment({ status: value }, user._id)
  }
  return (
    <Container fluid className="main-content-container px-4">
      <Loader isloading={isLoading} />
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Appointments" className="text-sm-left" />
      </Row>
      <Row>
        <Col md="4" style={{ border: 1 }}>
          <FormInput
            placeholder="Search here"
          />
          {appointment.length > 0 ?
            appointment.map((data) => {
              console.log(data, "DAAAAAAAAAAAAAAAAAAAAAaa");
              return (
                <>
                  <Col style={{ cursor: "pointer" }} onClick={_ => {
                    setUser(data)
                    setShowMessage(true)
                  }} className="border containersssss">
                    <div class="d-flex vertical-center">
                      <div style={{ marginTop: "20%", marginBottom: 15 }}>
                        <img src={data.img ? data.img : ProfilePic} class="rounded-circle user_img" />
                      </div>
                      <div class="user_info" style={{ marginTop: "15%", marginLeft: "10px", marginBottom: 50 }}>
                        <span>{data.name}</span><br />
                        <span>{data.message}</span>
                        <br />
                        <span>Status: {data.status == 0 ? "Pending" : data.status == 1 ?  "Accepted" : "Rejected"}</span>
                      </div>
                      <div class="user_info" style={{ marginTop: "15%", marginLeft: "10px" }}>
                        <span>{data.date}</span>
                      </div>
                    </div>
                  </Col>

                </>
              )
            })
            : <div>No Appointments found</div>
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
                      <p style={{ marginBottom: '0px' }} >{user.name}</p>
                      <p style={{ fontSize: '14px' }}>to me</p>
                    </div>

                  </div>

                  {/* <p style={{ marginTop: '5px', alignSelf: 'flex-end', textAlign: 'flex-end' }}>{user.date}</p> */}
                  <i class="material-icons"  style={{fontSize:'20px',cursor:'pointer',color:'red'}} onClick={_=>setShowMessage(false)}>cancel</i>
                </div>
                <p>{`Message : ${user.message}`}</p>
                <p>{`Requested Date : ${user.date}`}</p>
                {/* <FormGroup>
                  <InputGroup className="mb-3">
                    <FormTextarea rows="5" placeholder="Reply" />
                  </InputGroup>
                </FormGroup> */}
                {user.status == 0 && 
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Button style={{ width: '45%', backgroundColor: '#00e676', color: '#FFF' }} onClick={_ => handleAppointment(1)}>
                    Accept
                </Button>
                  <Button style={{ width: '45%', backgroundColor: '#ff5722', color: '#FFF' }} onClick={_ => handleAppointment(-1)}>
                    Reject
                </Button>
                </div>}


              </>
              :
              <p style={{ marginTop: '20%', marginLeft: '35%', fontSize: '22px' }}>
                Select an Appointment to view Details
             </p>
          }

        </Col>
      </Row>
    </Container>
  );
}

export default Appointments;
