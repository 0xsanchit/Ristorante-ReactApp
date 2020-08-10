import React , { Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardText , CardTitle} from 'reactstrap'
import { format } from 'date-fns';

class Dishdetail extends Component {
    constructor(props)
    {
        super(props);

    }

    render()
    {
        if(this.props.dish!=null)
        {
            const comments = this.props.dish.comments.map((comment1) =>{
                //var formattedDate = format(comment1.date , "MMMM Do, YYYY H:mma");
                return(
                    <div key={comment1.id} className="col-12">
                        <div className="container">
                        <div className="row">
                                {comment1.comment}
                            </div>
                            <div className="row">
                                <p>--{comment1.author} ,
                               {new Intl.DateTimeFormat('en-US', {year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment1.date)))} 
                                </p>
                                
                            </div>
                        </div>
                    </div>
                );
            })
            return(
                
                <div className="container">
                    <div className="row">
                    <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                       
                    <CardBody>
                    <CardTitle >{this.props.dish.name}</CardTitle>
                        {this.props.dish.description}
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <h1>Comments</h1>
                {comments}
            </div>
                    </div>
                    
                </div>
                
            );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
}

export default Dishdetail ;