import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const cachedStocks = localStorage.getItem('pinnedStocks');
        if (cachedStocks) {
            setPinnedStocks(JSON.parse(cachedStocks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('pinnedStocks', JSON.stringify(pinnedStocks));
    }, [pinnedStocks]);

    const fetchSuggestions = async (query) => {
        try {
            const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=6CVJHCC8JT92MUN1`);
            setSuggestions(response.data.bestMatches);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length >= 2) {
            fetchSuggestions(e.target.value);
        } else {
            setSuggestions([]);
        }
    };

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
                <MDBCol md='4' lg='4' className='mb-4' >
                    <MDBCard className='search-card h-100' border='primary'>
                        <MDBCardBody className='d-flex flex-column justify-content-between'>
                            <div>
                                <MDBCardTitle>Stock Price Search</MDBCardTitle>
                                <MDBInput
                                    label='Enter stock symbol'
                                    type='text'
                                    value={search}
                                    onChange={handleSearchInput}
                                    autoComplete='off'
                                />
                                {suggestions.length > 0 && (
                                    <ul className='suggestions-list'>
                                        {suggestions.map((suggestion) => (
                                            <li
                                                key={suggestion['1. symbol']}
                                                onClick={() => {
                                                    setSearch(suggestion['1. symbol']);
                                                    setSuggestions([]);
                                                }}
                                            >
                                                {suggestion['1. symbol']} - {suggestion['2. name']}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <MDBBtn onClick={handleSearch}>Search</MDBBtn>
                                <MDBBtn onClick={handlePin} className='mx-2' color='secondary'>PIN</MDBBtn>
                            </div>
                            {stockInfo.price && (
                                <>
                                    <MDBCardText>
                                        The current price of {search.toUpperCase()} stock is: ${stockInfo.price}
                                    </MDBCardText>

                                </>
                            )}
                            {stockInfo.error && (
                                <MDBCardText className='text-danger'>
                                    {stockInfo.error}
                                </MDBCardText>
                            )}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {pinnedStocks.map((stock, index) => (
                    <MDBCol key={index} size="4" md="3" lg="2" className='my-0'>
                        <MDBCard className='pinned-card' border='secondary'>
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

