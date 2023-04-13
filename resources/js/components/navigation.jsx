import React, { useState, useEffect } from 'react';
import '../../css/navbar.css';
import '../../css/bootstrap.min.css';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBCollapse,
} from 'mdb-react-ui-kit';

import Home from './home';
import Stocks from './stocks';
import Profile from './profile';
import Pricing from "./pricing";
import Settings from "./settings";

function Navigation() {
    const [showNav, setShowNav] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const [username, setUserName] = useState('');

    /*useEffect(() => {
        // Fetch user data from backend and set the username state
        fetch('/api/user')
            .then((response) => response.json())
            .then((data) => {
                setUserName(data.name);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);*/

    const handleLogout = () => {
        // Perform logout action
        console.log('Logged out successfully!');
        // Redirect to /logout
        window.location.href = '/logout';
    };

    const getContent = () => {
        switch (activeTab) {
            case 'home':
                return <Home />
            case 'stocks':
                return <Stocks />
            case 'profile':
                return <Profile />
            case 'settings':
                return <Settings />
            case 'pricing':
                return <Pricing />
                return null; // No content for the settings page yet
            default:
                return null;
        }
    };

    return (
        <div>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'><b>STONKS</b></MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNav(!showNav)}
                    >
                        <i className='fas fa-bars'></i>
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNav}>
                        <MDBNavbarNav>
                            <MDBNavbarItem>
                                <MDBNavbarLink active={activeTab === 'home'} onClick={() => setActiveTab('home')}>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active={activeTab === 'stocks'} onClick={() => setActiveTab('stocks')}>
                                    Stocks
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active={activeTab === 'pricing'} onClick={() => setActiveTab('pricing')}>
                                    Pricing
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <MDBNavbarLink className='ms-2'>{`Welcome ` + window.user.name.split(' ')[0]}</MDBNavbarLink>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='span' caret>
                                <img
                                    className="rounded-circle avatar"
                                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                                    alt="avatar"
                                />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className='dropdown-menu'>
                                <MDBDropdownItem className="dropdown-item logout" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>Profile</MDBDropdownItem>
                                <MDBDropdownItem className="dropdown-item logout" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>Settings</MDBDropdownItem>
                                <MDBDropdownItem className="dropdown-item logout" active={activeTab === 'logout'} onClick={() => window.location.href='/logout'}>Logout</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>

                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <MDBContainer className='my-3' fluid>{getContent()}</MDBContainer>
        </div>
    );
}

export default Navigation;
