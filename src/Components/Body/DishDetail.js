import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';

const DishDetail = (props) => {
    return (
        <div>
            <Card className="mt-3">
                <CardImg top src={props.dish.image} alt={props.dish.name} ></CardImg>
                <CardBody>
                    <CardTitle><h4>{props.dish.name}</h4></CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        TK: {props.dish.price}.00
                    </CardText>
                    <hr />
                    <h5 className="text-white text-center bg-dark">Customer Review</h5>
                    <LoadComments comments={props.comments}></LoadComments>
                    <hr />
                    <CommentForm
                        dishId={props.dish.id}
                        addComment={props.addComment}
                    />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;