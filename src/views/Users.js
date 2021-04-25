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

import PageTitle from "./components/PageTitle";
import classNames from "classnames";
const cardClasses = classNames(
  "user-cards",
);

const cardBodyClasses = classNames(
  "p-20"
);

const users = [
  { name: 'jhon', area: 'XYZ', mob: '92xxxxx', order: '5' },
  { name: 'jhon', area: 'XYZ', mob: '92xxxxx', order: '5' },
  { name: 'jhon', area: 'XYZ', mob: '92xxxxx', order: '5' },
  { name: 'jhon', area: 'XYZ', mob: '92xxxxx', order: '5' },
  { name: 'jhon', area: 'XYZ', mob: '92xxxxx', order: '5' },
  { name: 'jhon', area: 'XYZ', mob: '92xxxxx', order: '5' },
  { name: 'jhon', area: 'XYZ', mob: '92xxxxx', order: '5' },
]
const Users = () => {

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Users" className="text-sm-left" />
      </Row>

      <Row>
        {
          users.map(val => {
              return (
              <Col lg="4" md="6" sm="12" className="col-lg mb-4" >
                <Card small className={cardClasses}>
                  <CardBody className={cardBodyClasses}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <p>Product Sold</p>
                      <div> 
                        <i class="material-icons"  style={{cursor:'pointer',marginRight:'10px',fontSize:'20px'}}>edit</i>
                        <i class="material-icons"  style={{cursor:'pointer',fontSize:'20px'}}>cancel</i>
                      </div>
                    </div>
                    <div>
                      <p>2453</p>
                      <p>2453</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            )
          })
        }
      </Row>




    </Container>
  );
}

export default Users;
