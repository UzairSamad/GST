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
import CustomTable from "./components/CustomTableCoefficent.js";
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

  const tableHeader = ['Name', 'T1ART', 'T1AED', 'T1PWS', 'T2ART', 'T2AED', 'T2TIME', 'T2ERRCT', 'T2PERNOT', 'T3ERRCT', 'T4TOTAL', 'T4RIGHT', 'T3LEFT', 'EDIT']
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
      guide: 'Iphone Mean',
      fname: 'Jhon',
      testVersion: 'Classic',
      believedImpaired: 'Classic',
      fullAttention: 'True',
      testStart: '2021-08-10 10:08:54 +0000',
      classicScore: '68.22',
      gsTScore: '68.22',
      detailButton: 'Button',
      detailButton: 'Button1',



    },
    {
      guide: 'Iphone Sd',
      fname: 'Jhon',
      testVersion: 'Classic',
      believedImpaired: 'Classic',
      fullAttention: 'True',
      testStart: '2021-08-10 10:08:54 +0000',
      classicScore: '68.22',
      gsTScore: '68.22',
      detailButton: 'Button',
    },

  ]

  return (
    <Container fluid className="main-content-container px-4">
              <Loader isloading={isLoading} />

      {/* Page Header */}
      <Row noGutters className="page-header py-4" style={{ backgroundColor: '#fff', marginBottom: '30px', marginTop: '30px', width: '98%', height: '100px' }}>
        <Col md="4" style={{ marginLeft: '2%' }}>
          <div style={{ fontSize: '22px', fontWeight: '100' }}>Coefficient</div>
          <div style={{ fontWeight: '100' }}>Dashboard</div>
        </Col>
        <Col md="3">
        </Col>
        <Col md="1">
        </Col>
        <Col md="2" style={{ flexDirection: 'row', display: 'flex', marginLeft: '13%', marginTop: '-5px' }}>

        </Col>
      </Row>

      <CustomTable searchText={searchText} props={props} tableHead={tableHeader} tableBody={products} tableDisplayData={tableDisplayData} />
      <div style={{marginTop:'20px'}}>
        <CustomTable searchText={searchText} props={props} tableHead={tableHeader} tableBody={products} tableDisplayData={tableDisplayData} />
      </div>
      <div style={{marginTop:'20px'}}>
        <CustomTable searchText={searchText} props={props} tableHead={tableHeader} tableBody={products} tableDisplayData={tableDisplayData} />
      </div>
      <div style={{marginTop:'20px'}}>
        <CustomTable searchText={searchText} props={props} tableHead={tableHeader} tableBody={products} tableDisplayData={tableDisplayData} />
      </div>
    </Container>
  );
}

export default Products
