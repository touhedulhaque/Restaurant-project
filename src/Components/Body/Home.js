import React, { Component } from 'react';
import Loading from './Loading/Loading';





class Home extends Component {
    render() {
        document.title = "Restaurant"
        return (
            <div className="text-center mt-5 pt-5">
                <Loading />
            </div>
        );
    }
}

export default Home;