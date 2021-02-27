import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar dark color="dark" expand="sm" fixed="top" >
                    <div className="container-fluid navbar">
                        <NavbarToggler onClick={this.navToggle}></NavbarToggler>
                        <NavbarBrand href="/"> <img src="https://images.all-free-download.com/images/graphicthumb/offbeat_restaurant_menu_logo_design_vector_576613.jpg" alt="" width="80px" height="70px" /> RESTAURANT</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <Link to="/" className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem className="mr-auto">
                                    <Link to="/menu" className="nav-link ">Menu</Link>
                                </NavItem>
                                <NavItem className="mr-auto">
                                    <Link to="/about" className="nav-link ">About</Link>
                                </NavItem>
                                <NavItem className="mr-auto">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
            </div>
        );
    }
}

export default Navigation;