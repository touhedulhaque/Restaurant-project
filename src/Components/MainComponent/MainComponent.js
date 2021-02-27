import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainComponent = () => {
    return (
        <div style={{
            backgroundImage: "url('https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg')",
            backgroundColor: "beige", height: "1000px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat"
        }}>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default MainComponent;