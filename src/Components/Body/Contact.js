import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        document.title = "Contact"
        return (
            <div className="container pt-5">
                <div className="row row-content p-5" style={{ textAlign: "left" }}>
                    <div className="col-12">
                        <h3 className="text-center text-white m-2 p-5">"Send us your valuable &#9878; Feedback"</h3>
                    </div>
                    <br />
                    <div className="col-12 col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2} className="text-warning">&#9997;First Name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lasttname" md={2} className="text-warning">&#9997;Last Name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2} className="text-warning">&#9743; Telephone Number</Label>
                                <Col md={10}>
                                    <Input
                                        type="tel"
                                        name="telnum"
                                        placeholder="Telephone Number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2} className="text-warning">&#9993;  E-mail</Label>
                                <Col md={10}>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup >
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}
                                            /> <strong className="text-light">May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input
                                        type="select"
                                        name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>Tel.</option>
                                        <option>E-mail</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2} className="text-warning">&#9787; Your Feedback</Label>
                                <Col md={10}>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        value={this.state.message}
                                        row="12"
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Send Feedback &#10148;</Button>
                                </Col>
                            </FormGroup>
                        </Form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;