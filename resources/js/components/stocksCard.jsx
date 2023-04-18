import React, { useState } from 'react';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';

export default function StocksCard() {
    const [search, setSearch] = useState('');
    const [stockInfo, setStockInfo] = useState({price: null, error: null});
    const [pinnedStocks, setPinnedStocks] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8000/stocks/${search}`);
            const data = await response.json();
            console.log(search);
            setStockInfo({price: data.price, error: null});
        } catch (error) {
            setStockInfo({price: null, error: 'Error retrieving stock price'});
        }
    };

    const handlePin = () => {
        setPinnedStocks([...pinnedStocks, {symbol: search.toUpperCase(), price: stockInfo.price}]);
    };

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '1rem'}}>
            <MDBCard style={{maxWidth: '25%', minHeight: '400px', marginTop: '1rem'}}>
                <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/nature/184.webp'
                    position='top'
                    alt='...'
                />
                <MDBCardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
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
                            <MDBBtn onClick={handlePin}>Pin Stock</MDBBtn>
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
                <MDBCard key={index} style={{maxWidth: '25%', minHeight: '400px', marginTop: '1rem', padding: '0.5rem'}}>
                    <MDBCardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div style={{marginBottom: 'auto'}}>
                            <MDBCardTitle>{stock.symbol}</MDBCardTitle>
                            <MDBCardText style={{marginBottom: 0}}>
                                The current price of {stock.symbol} stock is: ${stock.price}
                            </MDBCardText>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            ))}
        </div>
    );
}
