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
import { userAuthResource } from '../WebApiServices/SimpleApiCalls'
import { user_login } from '../WebApiServices/WebServices'
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



  const handleRember = (e, fruit) => {
    const newState = {};
    newState[fruit] = !state[fruit];
    setState({ ...state, ...newState });
  }

  const handleSubmit = async () => {
    setLoading(true)

    if (data.username.length == 0 || data.password.length == 0) {
      ErrorHelper.handleErrors("Please fill complete information", true)
    }
    else {
      try {
        let response = await userAuthResource(user_login, data)
        setLoading(false)
        if (response.data.error) {
          ErrorHelper.handleErrors(response.data.error, true)

        } else {
          localStorage.setItem('user_token',response.data.data)
          props.history.push('/dashboard')

        }


      } catch (error) {
        ErrorHelper.handleErrors(error.response.data.error, true)
        setLoading(false)

      }
    }
  }
  return (
    <Container fluid >
      {/* Page Header */}
      <Row >
        <Col md="7" sm="12" >
          <img className={styles.image} src={companyLogo} />
        </Col>
        <Col md="5" style={{ marginTop: '8%', backgroundColoe: 'white' }}>
          <Row>
            <Col sm="12" md="12" >
              <p style={{ fontSize: '35px', textAlign: 'center', marginBottom: '0px' }}>MIMI'S HAIR SOLUTIONS</p>
              <p style={{ fontSize: '12px', textAlign: 'center', marginTop: -'20px' }}>Welcome back! Please login to your account.</p>
            </Col>
          </Row>

          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput placeholder="Username" onChange={(e) => { setData({ ...data, username: e.target.value }) }} value={data.username} />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput type='password' placeholder="Password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} value={data.password} />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row >
            <Col sm="12" md="3"  >
            </Col>
            <Col sm="12" md="3">
              <FormCheckbox
                checked={state.lemon}
                // className="ml-2 "
                style={{ fontSize: '13px' }}
                onChange={e => handleRember(e, "lemon")}
              >
                Remember Me
             </FormCheckbox>
            </Col>
            <Col sm="12" md="3" className='ml-4'>
              <p onClick={_ => props.history.push('/resetPassword')} style={{ fontSize: '13px', cursor: "pointer", color: 'red', fontWeight: "normal", marginTop: -'20px' }}>Forget Password</p>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3"></Col>
            {!loading && <Col sm="12" md="6" className='text-center'>
              <Button style={{ width: '100%', backgroundColor: '#43425D', color: '#FFF', bordercolor: '#FFF' }} className="mb-2" onClick={handleSubmit}>
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
