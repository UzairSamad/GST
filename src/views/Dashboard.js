import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./components/PageTitle";
import SmallStats from "../components/common/SmallStats";
import UsersOverview from "../components/blog/UsersOverview";
import UsersByDevice from "../components/blog/UsersByDevice";
import NewDraft from "../components/blog/NewDraft";
import Discussions from "../components/blog/Discussions";
import TopReferrals from "../components/common/TopReferrals";
import { Card, CardBody } from "shards-react";
import classNames from "classnames";


const cardClasses = classNames(
  "stats-small",
);

const cardBodyClasses = classNames(
  "p-20"
);
const DashBoard = ({ smallStats }) => (


  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Dashboard" className="text-sm-left mb-3" />
    </Row>

    <Row>
      <Col lg="6" md="6" sm="12" className="col-lg mb-4" >
        <Card small className={cardClasses}>
          <CardBody className={cardBodyClasses}>
            <div>
              <p>Product Sold</p>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row' ,justifyContent:'space-between'}}>
              <p>2453</p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6" md="6" sm="12" className="col-lg mb-4">
      <Card small className={cardClasses}>
          <CardBody className={cardBodyClasses}>
            <div>
              <p>TotalEarning</p>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row' ,justifyContent:'space-between'}}>
              <p>$39K</p>
              <p>2453</p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      {/* Users Overview */}
      <Col lg="12" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        {/* <UsersByDevice /> */}
      </Col>

      {/* New Draft */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        {/* <NewDraft /> */}
      </Col>

      {/* Discussions */}
      <Col lg="5" md="12" sm="12" className="mb-4">
        {/* <Discussions /> */}
      </Col>

      {/* Top Referrals */}
      <Col lg="3" md="12" sm="12" className="mb-4">
        {/* <TopReferrals /> */}
      </Col>
    </Row>
  </Container>
);




export default DashBoard;
