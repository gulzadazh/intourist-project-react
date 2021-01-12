import React from 'react';
import ToursCardItem from '../../Tours/ToursCard';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Home = () => {
    return (
        <div>
            <Header/>
            <Main/>
            {/* <Map/> */}
            <ToursCardItem/>
            <Footer/>
        </div>
    );
};

export default Home;