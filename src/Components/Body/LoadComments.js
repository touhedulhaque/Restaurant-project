import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = (props) => {
    return (
        props.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h5 className="border  rounded-circle text-center bg-warning ">{comment.author}</h5>
                    <p className="text-info font-italic">{comment.comment}</p>
                    <p className="text-success font-weight-bold">Rating: {comment.rating} <span className="text-muted"> (out of 5)</span></p>
                    <p> <small className="text-muted">{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</small> </p>
                </div>
            )
        })
    );
};

export default LoadComments;