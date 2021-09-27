/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  FormInput
} from "shards-react";

import PageTitle from "./components/PageTitle";
import CustomTable from "./components/CustomTable.js";
import Loader from './components/Loader'
import axios from 'axios'

const Products = (props) => {
  const [isLoading,setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean&encode=base64`)
      .then(response => {
        setTimeout(() => {
          setIsloading(false)
        }, 1000);
        console.log(response,'ressssssssss')
      })
      .catch(error => {
        setIsloading(false)
        console.log(error,'ressssssssss')
      });
}, [])
const tableHeader = ['Guide', 'First Name', 'Test Version', 'Belived Impaired', 'Full Attention', 'Test Start Time', 'Classic (/6)Score', 'GST (/12)Score', 'Z_TAP_ART', 'Z_TAPED_AED', 'Z_EST_ART', 'Z_EST_TIM', 'Z_FOL_PNT', 'Z_EST_AED', 'Z_BAL_LLD', 'Z_BAL_RLD', 'Z_TAP_PWS', 'Z_FOL_AED', 'Z_FOL_ERRCT', 'TAP_ART', 'EST_ART', 'EST_TIM', 'FOL_COS', 'BAL_DIS', 'BAL_LLD', 'BAL_RLD', 'BAL_LeftAverage', 'BAL_RightAverage', 'BAL_TotalAverage', 'TAP_Sum_of_React_Time', 'TAP_Sum_ of Error Distance', 'TAP_Total_Shapes_Shown', 'TAP_Total_Target_Shapes', 'TAP_WSC', 'TAP_Sum_of_Reaction_Time', 'EST_Sum_of_Error_Distance', 'EST_Total_Circles_Shown', 'FOL_Total_Squares_Shown', 'FOL_Square_Count_Error', 'TAP_AED', 'TAP_TTC', 'TAP_CTC', 'TAP_PWS', 'FOL_CSE', 'FOL_PNT', 'FOL_AED', 'FOL_TD', 'FOL_TOT', 'FOL_TDIS', 'EST_TEC', 'EST_TEE', 'EST_AED', 'EST_AED', 'EST_TSC', 'EST_TTC', 'Tap Task Detail', 'Follow Task Detail', 'Estimate Task Detail', 'Balance Task Detail', 'Get Json Data']
const tableDisplayData = [
  'guide',
  'fname',
  'testVersion',
  'believedImpaired',
  'fullAttention',
  'testStart',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'classicScore',
  'detailButton',
  'detailButton',
  'detailButton',
  'detailButton',
  'detailButton',

]
const [searchText, setSearchText] = useState('')
const initialData = {
  name: '',
  price: '',
  description: ''
}


let products = [
  {
    guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
    fname: 'Jhon',
    testVersion: 'Classic',
    believedImpaired: 'Classic',
    fullAttention: 'True',
    testStart: '2021-08-10 10:08:54 +0000',
    classicScore: '68.22',
    gsTScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    detailButton: 'Button',
    detailButton: 'Button1',



  },
  {
    guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
    fname: 'Jhon',
    testVersion: 'Classic',
    believedImpaired: 'Classic',
    fullAttention: 'True',
    testStart: '2021-08-10 10:08:54 +0000',
    classicScore: '68.22',
    gsTScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    detailButton: 'Button',
    detailButton: 'Button1',
  },
  {
    guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
    fname: 'Jhon',
    testVersion: 'Classic',
    believedImpaired: 'Classic',
    fullAttention: 'True',
    testStart: '2021-08-10 10:08:54 +0000',
    classicScore: '68.22',
    gsTScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    detailButton: 'Button',
  },
  {
    guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
    fname: 'Jhon',
    testVersion: 'Classic',
    believedImpaired: 'Classic',
    fullAttention: 'True',
    testStart: '2021-08-10 10:08:54 +0000',
    classicScore: '68.22',
    gsTScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    detailButton: 'Button',
  },
  {
    guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
    fname: 'Jhon',
    testVersion: 'Classic',
    believedImpaired: 'Classic',
    fullAttention: 'True',
    testStart: '2021-08-10 10:08:54 +0000',
    classicScore: '68.22',
    gsTScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    detailButton: 'Button',
  },
  {
    guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
    fname: 'Jhon',
    testVersion: 'Classic',
    believedImpaired: 'Classic',
    fullAttention: 'True',
    testStart: '2021-08-10 10:08:54 +0000',
    classicScore: '68.22',
    gsTScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    detailButton: 'Button',
  },
  {
    guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
    fname: 'Jhon',
    testVersion: 'Classic',
    believedImpaired: 'Classic',
    fullAttention: 'True',
    testStart: '2021-08-10 10:08:54 +0000',
    classicScore: '68.22',
    gsTScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    classicScore: '68.22',
    detailButton: 'Button',
  },
]

return (
  <Container fluid className="main-content-container px-4">
  <Loader isloading={isLoading} />
    {/* Page Header */}
    <Row noGutters className="page-header py-4" style={{ backgroundColor: '#fff', marginBottom: '30px', marginTop: '30px', width: '98%', height: '100px' }}>
      <Col md="4" style={{ marginLeft: '2%' }}>
        <div style={{ fontSize: '22px', fontWeight: '100' }}>Data Tables</div>
        <div style={{ fontWeight: '100' }}>Dashboard</div>
      </Col>
      <Col md="3">
      </Col>
      <Col md="1">
      </Col>
      <Col md="2" style={{ flexDirection: 'row', display: 'flex', marginLeft: '13%', marginTop: '-5px' }}>

      </Col>
    </Row>
    <Row noGutters className="page-header py-4" style={{ backgroundColor: '#fff', marginBottom: '30px', marginTop: '30px', width: '98%', height: '70px' }}>
      <Col md="4" style={{ marginLeft: '2%' }}>
        <div>GST Record</div>
      </Col>
      <Col md="3">
      </Col>
      <Col md="1">
      </Col>
      <Col md="2" style={{ flexDirection: 'row', display: 'flex', marginLeft: '13%', marginTop: '-5px' }}>
        <Button className="mb-2 mr-1" style={{ width: '95%', backgroundColor: '#1ab394' }}>
          Get JSON
        </Button>
        <Button className="mb-2 mr-1" style={{ width: '95%', backgroundColor: '#1ab394' }}>
          Get Excel
        </Button>
      </Col>
    </Row>

    <CustomTable titleEdit='Edit Product' searchText={searchText} props={props} onEditNavigate='/add-editproduct' tableHead={tableHeader} tableBody={products} tableDisplayData={tableDisplayData} />
  </Container>
);
}

export default Products
