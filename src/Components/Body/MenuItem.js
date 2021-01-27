import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = (props) => {

    return (
        <div>
            <Card className="text-center font-weight-bold m-3" >
                <CardBody>
                    <CardImg

                        style={{
                            opacity: "0.6"
                        }}
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}

                    ></CardImg>
                    <CardImgOverlay>
                        <CardTitle

                            onClick={props.dishSelect}
                            style={{ cursor: "pointer" }}

                        >{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;