import React from "react";
import { Button, Modal, ModalBody, ModalHeader, Row, Col, InputGroup, FormInput, FormGroup } from "shards-react";


const AddEditCategory = (props) => {
    const { isOpen, onClose, title, data } = props
    const [name, setName] = React.useState(data.name)
    return (
        <div>
            <Modal size="md" open={isOpen} toggle={onClose}>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col sm="12" md="8">
                            <FormGroup>
                                <label htmlFor="Category Name">Category Name</label>
                                <InputGroup className="mb-3">
                                    <FormInput value={name} placeholder="Category Name" />
                                </InputGroup>
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm="12" md="4">
                            <Button theme="primary" className="mb-2 mr-1" onClick={_=>onClose()}>
                                Cancel
                            </Button>
                        </Col>
                        <Col sm="12" md="4">
                            <Button  theme="primary" className="mb-2 mr-1">
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