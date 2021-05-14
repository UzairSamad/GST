/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect ,useContext} from "react";
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
import { AppContext } from '../AppContext'
import Loader from './components/Loader'


const PromoCodes = (props) => {
  const tableHeader = [ 'Image', 'Product Name', 'Before Price', 'After Price']
  const tableDisplayData = ['image', 'name', 'price', 'afterPrice',]
  const context = useContext(AppContext)
  const { getPromotions, isLoading, promotions, deletePromotion, } = context

  useEffect(() => {
    getPromotions()
  }, [])

  const initialData = {
    name: '',
    price: '',
    description: ''
  }
  const tableBody = [
    {
      id: 1,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice: "$5"


    },
    {
      id: 2,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice: "$5"
    },
    {
      id: 3,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice: "$5"

    },
    {
      id: 4,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice: "$5"

    },
    {
      id: 5,
      img: 'https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg',
      name: 'Small Wig',
      bfprice: '$11',
      afPrice: "$5"

    }
  ]
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Loader isloading={isLoading} />

      <Row noGutters className="page-header py-4">
        <Col md="4">
          <PageTitle sm="12" title="PromoCode and Deals" className="text-sm-left" />
        </Col>
        <Col md="4">
          <FormInput
            id="feEmailAddress"
            type="email"
            placeholder="Search"
          />          </Col>
        <Col md="2">
        </Col>
        <Col md="2">
          <Button onClick={_ => props.history.push({ pathname: '/PromotionProducts', state: { title: "Add PromoCode", data: initialData } })} theme="primary" className="mb-2 mr-1" style={{ width: '85%' }}>
            Add
         </Button>
        </Col>
      </Row>

      <CustomTable handleDelete={deletePromotion} titleEdit='Edit PromoCode and Deals' props={props} onEditNavigate='/addEdit-promocode' tableHead={tableHeader} tableBody={promotions} tableDisplayData={tableDisplayData} />
    </Container>
  );
}

export default PromoCodes
