import React from 'react';
import './../../css/navbar.css'
import {
    MDBCardBody,
    MDBCardTitle,
    MDBCard,
    MDBCardText, MDBContainer
} from 'mdb-react-ui-kit';
import StocksCard from "./stocksCard";


export default function Stocks() {
    return (
        <MDBContainer fluid>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Stocks Info</MDBCardTitle>
                    <hr></hr>
                    <MDBCardText>
                        Welcome to the Stocks Page, this is where you can search, view, manage and track your investment porfolio.
                    </MDBCardText>
                    <StocksCard />
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}
