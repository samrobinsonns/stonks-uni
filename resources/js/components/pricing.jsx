import React from 'react';
import './../../css/navbar.css'
import {
    MDBCardBody,
    MDBCardTitle,
    MDBCard,
    MDBCardText, MDBContainer
} from 'mdb-react-ui-kit';

export default function Pricing() {
    return (
        <MDBContainer fluid>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Pricing</MDBCardTitle>
                    <hr></hr>
                    <MDBCardText>
                        Pricing information coming soon!
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
