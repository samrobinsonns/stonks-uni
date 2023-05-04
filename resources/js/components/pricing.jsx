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
                                    <div className="plan-card" >
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
                        <div>
                            <ul>
                                <li>Credit or Debit Cards: We accept all major credit and debit cards, including Visa, Mastercard, American Express, and Discover.</li>
                                <li>PayPal: Customers can also choose to pay through PayPal, a secure and widely used online payment system.</li>
                                <li>Cryptocurrency: STONKS accepts payment in select cryptocurrencies, including Bitcoin and Ethereum.</li>
                                <li>Bank Transfer: Customers can choose to make a bank transfer to our account as a payment option.</li>
                            </ul>
                            <p>Please note that payment options may vary based on your location and the product or service you are purchasing.</p>
                        </div>

                        <div>
                            <h5>Terms of Service:</h5>
                            <ol>
                                <li><strong>Accuracy of Information:</strong> You are responsible for providing accurate and up-to-date information when using our services, including your name, contact details, and payment information.</li>
                                <li><strong>Payment and Fees:</strong> You agree to pay the full amount for the product or service you are purchasing. Any additional fees, such as transaction or processing fees, will be clearly communicated to you before you make a payment.</li>
                                <li><strong>Delivery and Refunds:</strong> We strive to provide timely and satisfactory delivery of our products and services. In case of any issues or delays, we will communicate with you promptly. If you are not satisfied with the product or service, you can request a refund as per our refund policy.</li>
                                <li><strong>Intellectual Property:</strong> STONKS owns all the intellectual property rights for the products and services we offer. You are not allowed to use our intellectual property without our explicit permission.</li>
                                <li><strong>Indemnification:</strong> You agree to indemnify STONKS and its affiliates from any claims, damages, or losses arising from your use of our services.</li>
                                <li><strong>Termination:</strong> We reserve the right to terminate our services to you at any time if you violate our terms and conditions.</li>
                            </ol>
                            <p>By using STONKS services, you acknowledge that you have read and understood these terms and conditions and agree to abide by them.</p>
                        </div>
                    </MDBCardText>

                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
