import React, { useState, useEffect } from 'react';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBInput,
    MDBIcon,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import './../../css/StocksCard.css';


export default function StocksCard() {
    const [search, setSearch] = useState('');
    const [stockInfo, setStockInfo] = useState({ price: null, error: null });
    const [pinnedStocks, setPinnedStocks] = useState([]);

    useEffect(() => {
        const cachedStocks = localStorage.getItem('pinnedStocks');
        if (cachedStocks) {
            setPinnedStocks(JSON.parse(cachedStocks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('pinnedStocks', JSON.stringify(pinnedStocks));
    }, [pinnedStocks]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8000/stocks/${search}`);
            const data = await response.json();
            console.log(search);
            setStockInfo({ price: data.price, error: null });
        } catch (error) {
            setStockInfo({ price: null, error: 'Error retrieving stock price' });
        }
    };

    const handlePin = () => {
        setPinnedStocks([...pinnedStocks, { symbol: search.toUpperCase(), price: stockInfo.price }]);
    };

    const handleRemove = (index) => {
        setPinnedStocks(pinnedStocks.filter((_, i) => i !== index));
    };

    return (
        <MDBContainer fluid className='stocks-container'>
            <MDBRow>
                <MDBCol md='6' lg='4' className='mb-4'>
                    <MDBCard className='search-card h-100' border='primary'>
                        <MDBCardBody className='d-flex flex-column justify-content-between'>
                            <div>
                                <MDBCardTitle>Stock Price Search</MDBCardTitle>
                                <MDBInput
                                    label='Enter stock symbol'
                                    type='text'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <MDBBtn onClick={handleSearch}>Search</MDBBtn>
                                <MDBBtn onClick={handlePin} className='mx-2' tag='a' color='success' outline floating>
                                    PIN
                                </MDBBtn>
                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {pinnedStocks.map((stock, index) => (
                    <MDBCol key={index} md='6' lg='4' className='mb-4'>
                        <MDBCard className='pinned-card h-100' border='secondary'>
                            <MDBCardBody className='d-flex flex-column justify-content-between'>
                                <div className='mb-auto'>
                                    <MDBCardTitle>{stock.symbol}</MDBCardTitle>
                                    <MDBCardText>
                                        The current price of {stock.symbol} stock is: ${stock.price}
                                    </MDBCardText>
                                </div>
                                <MDBBtn color='danger' onClick={() => handleRemove(index)}>
                                    Remove
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    );
}
