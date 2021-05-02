import React, { useEffect } from "react";
import { Button, Modal, ModalBody, ModalHeader, Row, Col, InputGroup, FormInput, FormGroup } from "shards-react";
import { AppContext } from '../../AppContext'
import Loader from '../components/Loader'
import ErrorHelper from '../components/Alert/ErrorHelper'

const AddEditCategory = (props) => {
    const { isOpen, onClose, title, data } = props
    console.log(data, 'datadatadata')
    const [name, setName] = React.useState('')
    const context = React.useContext(AppContext)
    const { updateCategory, isLoading } = context
    useEffect(() => {
        setName(data.name)
    }, [data.name])

    const handleEdit = () => {
        if (name !== '') {
            updateCategory({ name: name }, data._id)
            onClose()


        } else {
            ErrorHelper.handleErrors('Category Name is required', true)
        }
        // setIsop
    }
    return (
        <div>
            <Loader isLoading={isLoading} />
            <Modal size="md" open={isOpen} toggle={onClose}>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col sm="12" md="8">
                            <FormGroup>
                                <label htmlFor="Category Name">Category Name</label>
                                <InputGroup className="mb-3">
                                    <FormInput onChange={e => setName(e.target.value)} value={name} placeholder="Category Name" />
                                </InputGroup>
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm="12" md="4">
                            <Button theme="primary" className="mb-2 mr-1" onClick={_ => onClose()}>
                                Cancel
                            </Button>
                        </Col>
                        <Col sm="12" md="4">
                            <Button theme="primary" onClick={_ => handleEdit()} className="mb-2 mr-1">
                                Save
                            </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddEditCategory