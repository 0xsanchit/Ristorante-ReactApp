import React , {Component } from 'react';
import {Control, LocalForm , Errors } from 'react-redux-form'
import { Button, ModalBody, ModalHeader ,Modal,Row,Col,Label} from 'reactstrap';

const maxLength= (len) => (val) => !(val) || (val.length<= len);
const minLength= (len) => (val) => !(val) || (val.length>= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        }
        this.ModalToggle = this.ModalToggle.bind(this);
        
    }

    ModalToggle()
    {
        this.setState({
            isModalOpen: !(this.state.isModalOpen)
        })
    }

    render()
    {
        return(
            <>
            <Button outline onClick={this.ModalToggle}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.ModalToggle}>
                <ModalHeader toggle={this.ModalToggle}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <div className="col-12 col-md-9">
                        <LocalForm>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={3}>Rating</Label>
                                <Col md={9}>
                                    <Control.select model=".rating" id="rating" name="rating" placeholder="rating" className="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={3}>Your Name</Label>
                                <Col md={9}>
                                    <Control.text model=".name" id="name" placeholder="name" className="form-control" validators={{minLength:minLength(3),maxLength:maxLength(15)}}/>
                                    <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be less than 15 characters'
                                    }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={3}>Comment</Label>
                                <Col md={9}>
                                    <Control.textarea rows="6" model=".comment" id="comment" placeholder="comment" className="form-control"/>
                                </Col>
        </Row>
                        </LocalForm>
                    </div>
                </ModalBody>
            </Modal>
            </>
            );
    }
}

export default CommentForm;