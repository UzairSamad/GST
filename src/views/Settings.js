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
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Settings extends React.Component {


  render() {
  

    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Settings" className="text-sm-left" />
        </Row>
        <Row>
          
        </Row>

       
      </Container>
    );
  }
}

export default Settings;
