import React from 'react';
import './../../css/navbar.css'
import {
    MDBCardBody,
    MDBCardTitle,
    MDBCard,
    MDBCardText,
    MDBContainer
} from 'mdb-react-ui-kit';

export default function Home() {
    return (
        <MDBContainer fluid>
        <MDBCard>
            <MDBCardBody>
                <MDBCardTitle>Homepage</MDBCardTitle>
                <hr></hr>
                <MDBCardText>
                    Welcome to STONKS, the brand new stocks management system designed to help you take control of your investments!
                    <br></br><br></br>
                    With STONKS, you can easily track your portfolio, monitor market trends, and make informed investment decisions. Whether you're an experienced investor or just getting started, STONKS has everything you need to succeed in the stock market.
                    <br></br><br></br>
                    Our user-friendly interface makes it easy to view your portfolio performance, analyze stock data, and create custom watchlists. You can also set up real-time alerts to stay informed about market changes and receive personalized recommendations based on your investment goals.
                    <br></br><br></br>
                    At STONKS, we're committed to helping you achieve your financial objectives. Our team of expert analysts and market researchers are constantly monitoring the latest trends and developments, so you can be confident that you're making informed decisions based on the most up-to-date information.
                    <br></br><br></br>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnioOCiqemLco_NWGIBBgf98252i_FBBaXYQ&usqp=CAU" />
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        </MDBContainer>
    );
}

