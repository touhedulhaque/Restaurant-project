import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainComponent = () => {
    return (
        <div style={{
            background: "url('https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"
        }}>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default MainComponent;