/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import styles from './login.module.css'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  FormGroup,
  InputGroup,
  FormInput,
  image,
  FormCheckbox
} from "shards-react";
import BeatLoader from "react-spinners/BeatLoader";
import companyLogo from '../images/image.png'
import ErrorHelper from './components/Alert/ErrorHelper.js';
import SuccessHelper from './components/Alert/successHelper';
import Loader from './components/Loader';

const Login = (props) => {
  let [loading, setLoading] = useState(false);


  const [state, setState] = React.useState({
    orange: false,
    lemon: false,
    kiwi: false
  })

  const [data, setData] = React.useState({
    username: '',
    password: ""
  })





  const handleSubmit = async () => {
    props.history.push('/dashboard')

    // setLoading(true)

  }
  return (
    <Container fluid >
      {/* Page Header */}
      <Row >
       
        <Col md="12" style={{ marginTop: '4%', backgroundColoe: 'white' }}>
          <Row>
            <Col sm="12" md="12" >
              <p style={{ fontSize: '150px', fontWeight:'600' ,marginLeft:'6%',textAlign: 'center', marginBottom: '-16px' ,color:'#e6e6e6'}}>GST</p>
              <p style={{ fontSize: '16px', fontWeight:'100' ,textAlign: 'center', marginLeft:'6%',color:'#676a6c',marginBottom:'5px'}}>Login</p>
            </Col>
          </Row>

          <Row>
            <Col sm="0" md="5" ></Col>
            <Col sm="12" md="3" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput placeholder="Username" onChange={(e) => { setData({ ...data, username: e.target.value }) }} value={data.username} />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row  className='text-center'>
            <Col sm="0" md="5" ></Col>
            <Col sm="12" md="3" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput type='password' placeholder="Password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} value={data.password} />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>

            <Col sm="0" md="5"></Col>
            {!loading && <Col sm="12" md="3" className='text-center'>
              <Button style={{ width: '100%', backgroundColor: '#1ab394', color: '#FFF', bordercolor: '#FFF' }} className="mb-2" onClick={handleSubmit}>
                Login
                </Button>
            </Col>}
            {loading && <Col sm="12" md="12" className='text-center'>
              <BeatLoader color={'#43425D'} loading={loading} size={15} />
            </Col>
            }
            {/* <Col sm="12" md="3" className='text-center md-ml-3'>
              <Button onClick={_ => props.history.push('/signUp')} style={{ width: '100%', backgroundColor: '#FFF', color: '#43425D', bordercolor: '#FFF' }} className="mb-2 mr-1">
                Sign Up
              </Button>
            </Col> */}
            <Col sm="12" md="2"></Col>

          </Row>



        </Col>

      </Row>

    </Container>
  );
}

export default Login
