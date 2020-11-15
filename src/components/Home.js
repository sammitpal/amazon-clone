import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://offerscouponsdeals.in/blog/wp-content/uploads/2018/12/Top_banner_PC_NewGirl.jpg" alt="" />
            </div>

            <div className="home_row">
                <Product title='Lenovo ThinkPad E14 Intel Core i5 10th Gen 14-inch Full HD IPS Thin and Light Laptop (8GB RAM/ 1TB HDD + 128GB SSD/ Windows 10 Home/ Microsoft Office Home & Student 2019/ Black/ 1.69kg), 20RAS0W500' price={59990} image='https://m.media-amazon.com/images/I/71k3N4gxNeL._AC_SX615_SY462_.jpg' rating={3} />
                <Product title='Sony WF-1000XM3 Truly Wireless Bluetooth Earbuds/Earbuds with Battery Life 32 Hours, Alexa Voice Control and mic for Phone Calls – True Wireless Industry Leading Active Noise Cancellation (Black)' price={14990} image='https://images-na.ssl-images-amazon.com/images/I/61lhXtVMxOL._SL1500_.jpg' rating={4}/>
            </div>
            <div className="home_row">
                <Product title='Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case' price = {24990} image = 'https://images-na.ssl-images-amazon.com/images/I/81tEJ0HH%2BxL._SL1500_.jpg' rating={4}/>
                <Product title='Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers' price = {104999} image = 'https://images-na.ssl-images-amazon.com/images/I/714vQdy88KL._SL1500_.jpg' rating={5}/>
                <Product title='New Apple iPhone 12 Pro (256GB) - Graphite' price = {124900} image = 'https://images-na.ssl-images-amazon.com/images/I/71YlH-4MUQL._SL1500_.jpg' rating={4}/>
            </div>
            <div className="home_row">
                <Product title='Samsung 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55Q80TAKXXL (Carbon Silver) (2020 Model)' price = {159990} image='https://images-na.ssl-images-amazon.com/images/I/81r0c5k-ZSL._SL1500_.jpg' rating={5}/>
            </div>
        </div>
    )
}

export default Home
