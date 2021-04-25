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



const Login = (props) => {
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
        <Col md="7" sm="0" style={{ backgroundColor: 'red', }}>
        </Col>
        <Col md="5" style={{ marginTop: '8%', backgroundColoe: 'white' }}>
          <Row>
            <Col sm="12" md="12" >
              <p style={{ fontSize: '35px', textAlign: 'center', marginBottom: '0px' }}>MIMI'S HAIR SOLUTIONS</p>
              <p style={{ fontSize: '12px', textAlign: 'center', marginTop: -'20px' }}>Enter your email and we send you a password reset link.</p>
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
                  <FormInput type='password' placeholder="Password" />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="2"></Col>
            <Col sm="12" md="4" className="ml-5">
              <FormCheckbox
                checked={state.lemon}
                className="ml-3"
                onChange={e => handleChange(e, "lemon")}
              >
                Remember Me
             </FormCheckbox>
            </Col>
            <Col sm="12" md="3" className='text-center'>
              <p style={{ fontSize: '13px', fontWeight: "normal", textAlign: 'center', marginTop: -'20px', marginLeft: '-12px' }}>Forge Password</p>
            </Col>
          </Row>
          <Row>
            <Col sm="0" md="3"></Col>
            <Col sm="12" md="3" className='text-center'>
              <Button style={{ width: '90%', backgroundColor: '#43425D', color: '#FFF', bordercolor: '#FFF' }} className="mb-2" onClick={_=>props.history.push('/dashboard')}>
                Login
                </Button>
            </Col>
            <Col sm="12" md="3" className='text-center ml-3'>
              <Button style={{ width: '90%', backgroundColor: '#FFF', color: '#43425D', bordercolor: '#FFF' }} className="mb-2 mr-1">
                Sign Up
              </Button>
            </Col>
            <Col sm="12" md="2"></Col>

          </Row>



        </Col>

      </Row>

    </Container>
  );
}

export default Login
