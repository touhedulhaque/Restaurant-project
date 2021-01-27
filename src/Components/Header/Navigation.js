import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <div className="container-fluid">
                    <NavbarBrand href="/"> <img src="https://images.all-free-download.com/images/graphicthumb/offbeat_restaurant_menu_logo_design_vector_576613.jpg" alt="" width="80px" height="70px" /> RESTAURANT</NavbarBrand>
                </div>

            </Navbar>
        </div>
    );
};

export default Navigation;