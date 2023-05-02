import React from 'react';
import './../../css/navbar.css';
import './../../css/pricing.css';

import {
    MDBCardBody,
    MDBCardTitle,
    MDBCard,
    MDBCardText,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function Pricing() {
    const pricingPlans = [
        {
            title: 'Basic',
            price: '9.99',
            features: ['Pin up to 5 stock prices', 'Real-time stock data', 'Price alerts']
        },
        {
            title: 'Pro',
            price: '19.99',
            features: ['Pin up to 10 stock prices', 'Real-time stock data', 'Price alerts', 'Advanced stock analysis', 'Customizable watchlists']
        },
        {
            title: 'Enterprise',
            price: '49.99',
            features: ['Pin unlimited stock prices', 'Real-time stock data', 'Price alerts', 'Advanced stock analysis', 'Customizable watchlists', 'Portfolio tracking']
        }
    ];

    return (
        <MDBContainer fluid>
            <MDBCard className="pricing-card">
                <MDBCardBody>
                    <MDBCardTitle>Pricing</MDBCardTitle>
                    <hr></hr>
                    <MDBCardText>
                        <MDBRow>
                            {pricingPlans.map((plan, index) => (
                                <MDBCol key={index} className="text-center pricing-plan">
                                    <div className="plan-card">
                                        <h4 className="plan-title">{plan.title}</h4>
                                        <h2 className="plan-price">
                                            ${plan.price}
                                            <small>/month</small>
                                        </h2>
                                        <ul className="plan-features">
                                            {plan.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                        <button className="plan-button">Choose Plan</button>
                                    </div>
                                </MDBCol>
                            ))}
                        </MDBRow>
                        <hr />
                        <h5>Payment Options</h5>
                        <MDBIcon fab icon="cc-visa" className="mx-3 payment-icon" size="2x" />
                        <MDBIcon fab icon="cc-mastercard" className="mx-3 payment-icon" size="2x" />
                        <MDBIcon fab icon="cc-amex" className="mx-3 payment-icon" size="2x" />
                        <MDBIcon fab icon="cc-paypal" className="mx-3 payment-icon" size="2x" />
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
