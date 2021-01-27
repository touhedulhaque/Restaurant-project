import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = (props) => {
    return (
        <div>
            <Card className="mt-3">
                <CardImg top src={props.dish.image} alt={props.dish.name} ></CardImg>
                <CardBody>
                    <CardTitle><h4>{props.dish.name}</h4></CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <h5>TK: {props.dish.price}.00</h5>
                    </CardText>
                    <hr />
                    <h5 className="text-white text-center bg-dark">Customer Review</h5>
                    <LoadComments comments={props.dish.comments}></LoadComments>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;