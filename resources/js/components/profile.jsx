import React from 'react';
import './../../css/navbar.css'
import {
    MDBCardBody,
    MDBCardTitle,
    MDBCard,
    MDBCardText, MDBContainer
} from 'mdb-react-ui-kit';

export default function Profile() {
    return (
        <MDBContainer fluid>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Profile</MDBCardTitle>
                    <hr></hr>
                    <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
