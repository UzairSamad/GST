/* eslint jsx-a11y/anchor-is-valid: 0 */

import React,{useState} from "react";
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
import CategoriesTable from "./components/CategoriesTable";
import AddEditCategory from "./components/AddEditCategory";
import { AppContext } from '../AppContext'
import ErrorHelper from './../views/components/Alert/ErrorHelper'
import Loader from "./components/Loader"

const Categories = () => {
  const [isOpen, setIsOPen] = React.useState(false)
  const [categoryName, setCategoryName] = React.useState('')
  const [searchText, setSearchText] = useState('')
  const contextt = React.useContext(AppContext)
  const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    categories,
    isLoading
  } = contextt
  const tableHeader = ['Name']
  const tableDisplayData = ['name']
  const tableBody = [
    {
      id: 1,
      name: 'Small Wig Wig  Wig Wig 2',
    },
    {
      id: 2,
      name: 'Small Wig Wig  Wig Wig 1',
    },
    {
      id: 3,
      name: 'Small Wig Wig  Wig Wig 3',
    },
    {
      id: 4,
      name: 'Small Wig Wig  Wig Wig 4',
    },
    {
      id: 5,
      name: 'Small Wig Wig  Wig Wig 5',
    }
  ]

  React.useEffect(() => {
    getCategories()
  }, [

  ])
  const handleCreateCategory = () => {
    if (categoryName !== '') {
      createCategory({ name: categoryName })
      setCategoryName('')


  } else {
      ErrorHelper.handleErrors('Category Name is required', true)
  }
  }
  return (
    <Container fluid className="main-content-container px-4">
            <Loader isloading={isLoading} />

      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <Col md="4">
          <PageTitle sm="12" title="Categories" className="text-sm-left" />
        </Col>
        <Col md="4">
          <FormInput
            id="feEmailAddress"
            type="email"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          </Col>
      </Row>
      <Row style={{ marginLeft: '12px' }} noGutters className="page-header py-4">
        <Col md="4" style={{ marginRight: '10px' }}>
          <FormInput
            id="feEmailAddress"
            type="category"
            placeholder="Create Category"
            style={{ width: '100%' }}
            value={categoryName}
            onChange={e => { setCategoryName(e.target.value) }}
          />
        </Col>
        <Col md="2">
          <Button theme="primary" onClick={handleCreateCategory} className="mb-2 mr-1" style={{ width: '120%' }}>
            Add
         </Button>
        </Col>
      </Row>
      <Row style={{ marginLeft: '10px' }}>
        <CategoriesTable  searchText={searchText} tableHead={tableHeader} tableBody={categories} tableDisplayData={tableDisplayData} />

      </Row>
      {/* <AddEditCategory data={{ name: '', id: '' }} isOpen={isOpen} onClose={_ => setIsOPen(false)} title='Add Category' /> */}

    </Container>
  );


}

export default Categories

