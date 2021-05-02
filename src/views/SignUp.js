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
  FormGroup,
  InputGroup,
  FormInput,
  FormCheckbox
} from "shards-react";
import companyLogo from '../images/image.png'
import { userAuthResource } from '../WebApiServices/SimpleApiCalls'
import { user_register } from '../WebApiServices/WebServices'
import ErrorHelper from './components/Alert/ErrorHelper';
import SuccessHelper from './components/Alert/successHelper';
import Loader from './components/Loader/index';


const SignUp = (props) => {
  const [state, setState] = React.useState({
    orange: false,
    lemon: false,
    kiwi: false
  })
  const [data, setData] = React.useState({
    username: '',
    password: "",
    confirmPassword: "",
    lastname: "",
    email: "",
    firstname: "",
  })
  const [error, setError] = React.useState({
    username: null,
    password: null,
    confirmPassword: null,
    lastname: null,
    email: null,
    firstname: null,
  })

  const handleChange = (e, fruit) => {
    const newState = {};
    newState[fruit] = !state[fruit];
    setState({ ...state, ...newState });
  }

  const checkValidations = () => {

    if (data.email == '') {
      setError({ ...error, email: 'Email is Required' })
      setTimeout(() => {
        setError({
          username: null,
          password: null,
          confirmPassword: null,
          lastname: null,
          email: null,
          firstname: null,
        })
      }, 2000);
    } else if (data.lastname == '') {
      setError({ ...error, lastname: 'Last Name is Required' })
      setTimeout(() => {
        setError({
          username: null,
          password: null,
          confirmPassword: null,
          lastname: null,
          email: null,
          firstname: null,
        })
      }, 2000);

    } else if (data.firstname == '') {
      setError({ ...error, firstname: 'First Name is Required' })
      setTimeout(() => {
        setError({
          username: null,
          password: null,
          confirmPassword: null,
          lastname: null,
          email: null,
          firstname: null,
        })
      }, 2000);

    } else if (data.username == '') {
      setError({ ...error, username: 'User Name is Required' })
      setTimeout(() => {
        setError({
          username: null,
          password: null,
          confirmPassword: null,
          lastname: null,
          email: null,
          firstname: null,
        })
      }, 2000);

    } else if (data.password.length < 7) {
      setError({ ...error, password: 'Password must be atleast 8 characters' })
      setTimeout(() => {
        setError({
          username: null,
          password: null,
          confirmPassword: null,
          lastname: null,
          email: null,
          firstname: null,
        })
      }, 2000);

    } else if (data.password != data.confirmPassword) {
      setError({ ...error, confirmPassword: 'Confirm Password do not match!!!' })
      setTimeout(() => {
        setError({
          username: null,
          password: null,
          confirmPassword: null,
          lastname: null,
          email: null,
          firstname: null,
        })
      }, 2000);
    } else {
      userSignUp()
    }
  }

  const userSignUp = async () => {
    let response = await userAuthResource(user_register, data)
    if (response.data.error) {
      ErrorHelper.handleErrors(response.data.error, true)
    } else {
      SuccessHelper.handleSuccess('User Created Succefuly', true)
      props.history.push('/login')
    }
  }
  return (
    <Container fluid >
      {/* Page Header */}
      <Row >
        <Col md="7" sm="0" >
          <img src={companyLogo} style={{ width: "100%", height: '43.4rem', marginLeft: '-14px' }} />

        </Col>
        <Col md="5" style={{ marginTop: '8%', backgroundColoe: 'white' }}>
          <Row>
            <Col sm="12" md="12" >
              <p style={{ fontSize: '35px', textAlign: 'center', marginBottom: '0px' }}>MIMI'S HAIR SOLUTIONS</p>
              <p style={{ fontSize: '12px', textAlign: 'center', marginTop: -'20px' }}>
                Please complete to create your account.
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                {/* <InputGroup className="mb-3"> */}
                <FormInput value={data.firstname} onChange={e => setData({ ...data, firstname: e.target.value })} placeholder="First Name" />
                {error.firstname && <p style={{ marginBottom: '-0.25rem', color: 'red', fontSize: '12px' }} >{error.firstname}</p>}
                {/* </InputGroup> */}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                {/* <InputGroup className="mb-3"> */}
                <FormInput value={data.lastname} onChange={e => setData({ ...data, lastname: e.target.value })} placeholder="Last Name" />
                {error.lastname && <p style={{ marginBottom: '-0.25rem', color: 'red', fontSize: '12px' }} >{error.lastname}</p>}

                {/* </InputGroup> */}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                {/* <InputGroup className="mb-3"> */}
                <FormInput value={data.username} onChange={e => setData({ ...data, username: e.target.value })} placeholder="Username" />
                {error.username && <p style={{ marginBottom: '-0.25rem', color: 'red', fontSize: '12px' }} >{error.username}</p>}

                {/* </InputGroup> */}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                {/* <InputGroup className="mb-3"> */}
                <FormInput value={data.email} onChange={e => setData({ ...data, email: e.target.value })} placeholder="Email" />
                {error.email && <p style={{ marginBottom: '-0.25rem', color: 'red', fontSize: '12px' }}>{error.email}</p>}

                {/* </InputGroup> */}

              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                {/* <InputGroup className="mb-3"> */}
                <FormInput value={data.password} onChange={e => setData({ ...data, password: e.target.value })} type='password' placeholder="Password" />
                {error.password && <p style={{ marginBottom: '-0.25rem', color: 'red', fontSize: '12px' }}>{error.password}</p>}

                {/* </InputGroup> */}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                {/* <InputGroup className="mb-3"> */}
                <FormInput value={data.confirmPassword} onChange={e => setData({ ...data, confirmPassword: e.target.value })} type='password' placeholder="Confirm Password" />
                {error.confirmPassword && <p style={{ marginBottom: '-0.25rem', color: 'red', fontSize: '12px' }}>{error.confirmPassword}</p>}
                {/* </InputGroup> */}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="2"></Col>
            <Col sm="12" md="6" className="ml-5">
              <FormCheckbox
                checked={state.lemon}
                className="ml-3"
                onChange={e => handleChange(e, "lemon")}
              >
                I agree with terms and conditions
             </FormCheckbox>
            </Col>

          </Row>
          <Row>
            <Col sm="0" md="4"></Col>
            <Col sm="12" md="4" className='text-center'>
              <Button style={{ width: '90%', backgroundColor: '#43425D', color: '#FFF', bordercolor: '#FFF' }} className="mb-2" onClick={_ => checkValidations()}>
                Sign Up
                </Button>
              <p onClick={_ => props.history.push('/login')} style={{ color: '#43425D', fontWeight: 'normal', cursor: 'pointer', fontSize: '12px', marginTop: '5px' }}>Already have account ? Back to Login</p>
            </Col>
            <Col sm="12" md="2"></Col>
          </Row>



        </Col>

      </Row>

    </Container>
  );
}

export default SignUp
