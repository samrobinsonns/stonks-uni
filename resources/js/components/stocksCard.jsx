import React, { useState, useEffect } from 'react';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';

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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '1rem' }}>
            <MDBCard style={{ maxWidth: '25%', minHeight: '400px', marginTop: '1rem' }}>
                <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/nature/184.webp'
                    position='top'
                    alt='...'
                />
                <MDBCardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <MDBCardTitle>Stock Price Search</MDBCardTitle>
                        <MDBInput
                            label='Enter stock symbol'
                            type='text'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <MDBBtn onClick={handleSearch}>Search</MDBBtn>
                    </div>
                    {stockInfo.price && (
                        <>
                            <MDBCardText>
                                The current price of {search.toUpperCase()} stock is: ${stockInfo.price}
                            </MDBCardText>
                            <MDBBtn onClick={handlePin}>
                                <MDBIcon fas icon='thumbtack' /> Pin Stock
                            </MDBBtn>
                        </>
                    )}
                    {stockInfo.error && (
                        <MDBCardText className='text-danger'>
                            {stockInfo.error}
                        </MDBCardText>
                    )}
                </MDBCardBody>
            </MDBCard>
            {pinnedStocks.map((stock, index) => (
                <MDBCard key={index} style={{ maxWidth: '25%', minHeight: '400px', marginTop: '1rem', padding: '0.5rem' }}>
                    <MDBCardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ marginBottom: 'auto' }}>
                            <MDBCardTitle>{stock.symbol}</MDBCardTitle>
                            <MDBCardText style={{ marginBottom: 0 }}>
                                The current price of {stock.symbol} stock is: ${stock.price}
                            </MDBCardText>
                        </div>
                        <MDBBtn color='danger' onClick={() => handleRemove(index)}>
                            Remove
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            ))}
        </div>
    );
}
