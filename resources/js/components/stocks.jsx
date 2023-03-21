import React from 'react';
import './../../css/navbar.css'
import {
    MDBCardBody,
    MDBCardTitle,
    MDBCard,
    MDBCardText
} from 'mdb-react-ui-kit';

export default function Stocks() {
    return (
        <MDBCard className="contentSettings">
            <MDBCardBody>
                <MDBCardTitle>Stocks</MDBCardTitle>
                <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}
