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

    const handleSearch = async () => {
        try {
            const response = await fetch(`app/Http/Controllers/Auth/get_stock_price.php?symbol=${search}`)
            const data = await response.json();
            setStockInfo({price: data.price, error: null});
        } catch (error) {
            setStockInfo({price: null, error: 'Error retrieving stock price'});
        }
    };

    return (
        <MDBCard style={{maxWidth: '30%', marginTop: '1rem'}}>
            <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/nature/184.webp'
                position='top'
                alt='...'
            />
            <MDBCardBody>
                <MDBCardTitle>Stock Price Search</MDBCardTitle>
                <MDBInput
                    label='Enter stock symbol'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <MDBBtn onClick={handleSearch}>Search</MDBBtn>
                {stockInfo.price && (
                    <MDBCardText>
                        The current price of {search.toUpperCase()} stock is: ${stockInfo.price}
                    </MDBCardText>
                )}
                {stockInfo.error && (
                    <MDBCardText className='text-danger'>
                        {stockInfo.error}
                    </MDBCardText>
                )}
            </MDBCardBody>
        </MDBCard>
    );
}
