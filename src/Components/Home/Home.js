import React from 'react';
import Class from '../Class/Class'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeAbout></HomeAbout>
            <Class></Class>

            <Footer></Footer>


        </div>
    );
};

export default Home;