import React, { Component } from 'react';
import TypeAnimation from './TypeAnimation';






class Home extends Component {
    render() {
        document.title = "Restaurant"
        return (
            <div className="text-center mt-5 pt-5">
                <h1 className="pt-5 text-white">Best American-Italian Restaurant in Town </h1>
                <br />
                <TypeAnimation />
            </div>
        );
    }
}

export default Home;