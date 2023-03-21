import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useAuth } from "../../../contexts/AuthContext";

const Profile = () => {
    const { currentUser } = useAuth();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        fetch(`/api/user/${currentUser.id}`)
            .then((response) => response.json())
            .then((data) => {
                const user = data;
                setUserData({ name: user.name, email: user.email });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentUser]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/api/user/${currentUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: userData.name,
                email: userData.email,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    alert('User updated successfully');
                } else {
                    throw new Error('An error occurred. Please try again later.');
                }
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    };

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md='6'>
                    <form onSubmit={handleSubmit}>
                        <p className='h4 text-center mb-4'>Profile Information</p>
                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>
                            Your name
                        </label>
                        <input
                            type='text'
                            id='defaultFormRegisterNameEx'
                            className='form-control'
                            name='name'
                            value={userData.name}
                            onChange={handleInputChange}
                        />
                        <br />
                        <label htmlFor='defaultFormRegisterEmailEx' className='grey-text'>
                            Your email
                        </label>
                        <input
                            type='email'
                            id='defaultFormRegisterEmailEx'
                            className='form-control'
                            name='email'
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                        <div className='text-center mt-4'>
                            <MDBBtn color='unique' type='submit'>
                                Save Changes
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Profile;
