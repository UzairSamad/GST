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



const SignUp = (props) => {
  const [state, setState] = React.useState({
    orange: false,
    lemon: false,
    kiwi: false
  })
  const handleChange = (e, fruit) => {
    const newState = {};
    newState[fruit] = !state[fruit];
    setState({ ...state, ...newState });
  }

  return (
    <Container fluid >
      {/* Page Header */}
      <Row >
        <Col md="7" sm="0" >
        <img src={companyLogo} style={{width:"100%",height:'43.4rem',marginLeft:'-14px'}} />

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
                <InputGroup className="mb-3">
                  <FormInput placeholder="First Name" />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput placeholder="Last Name" />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput placeholder="Username" />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput placeholder="Email" />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput type='password' placeholder="Password" />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3" ></Col>
            <Col sm="12" md="6" className='text-center'>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput type='password' placeholder="Confirm Password" />
                </InputGroup>
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
              <Button style={{ width: '90%', backgroundColor: '#43425D', color: '#FFF', bordercolor: '#FFF' }} className="mb-2" onClick={_=>props.history.push('/dashboard')}>
                Sign Up
                </Button>
                <p onClick={_=>props.history.push('/login')} style={{color:'#43425D',fontWeight:'normal',cursor:'pointer',fontSize:'12px',marginTop:'5px'}}>Already have account ? Back to Login</p>
            </Col>
            <Col sm="12" md="2"></Col>
          </Row>



        </Col>

      </Row>

    </Container>
  );
}

export default SignUp
