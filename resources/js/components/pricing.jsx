import React, { useState } from 'react';
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

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleCVVChange = (e) => {
        setCVV(e.target.value);
    };

    const handlePaymentProcess = () => {
        // Implement payment processing logic here
        // You can use the cardNumber, expiryDate, and cvv variables to process the payment
    };

    return (
        <MDBContainer fluid>
            <MDBCard className="pricing-card">
                <MDBCardBody>
                    <MDBCardTitle>Pricing</MDBCardTitle>
                    <hr />
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
                        <div className="payment-options">
                            <div className="card-number-input">
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                />
                            </div>
                            <div className="cvv-expiry">
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    value={cvv}
                                    onChange={handleCVVChange}
                                />
                                <span className="expiry-separator">/</span>
                                <input
                                    type="text"
                                    placeholder="Expiry Date"
                                    value={expiryDate}
                                    onChange={handleExpiryDateChange}
                                />
                            </div>
                            <button className="process-payment-button" onClick={handlePaymentProcess}>
                                Process Payment
                            </button>
                        </div>
                    </MDBCardText>

                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
