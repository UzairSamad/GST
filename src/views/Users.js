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
  Button
} from "shards-react";
import Avatar from '@material-ui/core/Avatar';
import { AppContext } from "../AppContext"
import PageTitle from "./components/PageTitle";
import Loader from "./components/Loader"
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
  const context = useContext(AppContext)
  const { getMobileUsers, appUsers, isLoading } = context

  useEffect(() => {
    getMobileUsers()
  }, [])
  console.log(appUsers, "appUsersappUsersappUsersappUsers");
  return (
    <Container fluid className="main-content-container px-4">
      <Loader isloading={isLoading} />
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Users" className="text-sm-left" />
      </Row>

      <Row>
        {appUsers.length > 0 ?
          appUsers.map(val => {
            console.log(val, "valvalvalvalval");
            return (
              <Col lg="4" md="6" sm="12" className="col-lg mb-4" >
                <Card small className={cardClasses}>
                  <CardBody className={cardBodyClasses}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                      <Avatar alt="Remy Sharp" style={{ width: '50px', height: '  ' }} size src="https://www.pngjoy.com/pngm/186/3682484_harambe-face-sample-avatar-hd-png-download.png" />
                      <div style={{ marginLeft: '15px' }}>
                        <p>{val.name}</p>
                        <div style={{ marginTop: '-20px' }}>
                          <p style={{ marginTop: '-8px', fontSize: '12px', coloe: '#868e96' }}>{val.email}</p>
                          <p style={{ marginTop: '-8px', fontSize: '12px', coloe: '#868e96' }}>{val.addressline}</p>
                          <p style={{ marginTop: '-28px', fontSize: '12px', coloe: '#868e96' }}>Mobile :{val.phoneNumber}</p>
                          <p style={{ marginTop: '-28px', fontSize: '12px', coloe: '#868e96' }}>Order 0</p>
                        </div>
                      </div>
                    </div>

                  </CardBody>
                </Card>
              </Col>
            )
          })
          : <Row>
            <Col lg="12" className="text-center">
              No Users Found
            </Col>
          </Row>
        }
      </Row>




    </Container >
  );
}

export default Users;


{/* <div style={{ marginLeft: '30%' }}>
                        <i class="material-icons" style={{ cursor: 'pointer', marginRight: '10px', fontSize: '20px' }}>edit</i>
                        <i class="material-icons" style={{ cursor: 'pointer', fontSize: '20px' }}>cancel</i>
                      </div> */}
