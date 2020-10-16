import React , {Component } from 'react';
import {Control, LocalForm , Errors } from 'react-redux-form'
import { Button, ModalBody, ModalHeader ,Modal,Row,Col,Label} from 'reactstrap';
import {Link} from 'react-router-dom'

const maxLength= (len) => (val) => !(val) || (val.length<= len);
const minLength= (len) => (val) => !(val) || (val.length>= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        }
        this.ModalToggle = this.ModalToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    ModalToggle()
    {
        this.setState({
            isModalOpen: !(this.state.isModalOpen)
        })
    }

    handleSubmit(values) {  
        console.log("Hello handleSubmit"+this.props.dishId + "  " + values.rating+"  " + values.author + "   " + values.comment )

        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)
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
                        <LocalForm  onSubmit={(values) => this.handleSubmit(values)}>
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
                                <Label htmlFor="author" md={3}>Your Name</Label>
                                <Col md={9}>
                                    <Control.text model=".author" id="author" placeholder="author" className="form-control" validators={{minLength:minLength(3),maxLength:maxLength(15)}}/>
                                    <Errors
                                    className="text-danger"
                                    model=".author"
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
                            <Row className="form-group">
                                     <Col md={{size:10 , offset:2}}>
                                        <Button type="submit" color="primary">
                                            Submit Comment
                                        </Button>
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