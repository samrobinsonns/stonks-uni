import React, { useState } from 'react';
import axios from 'axios';
import './../../css/navbar.css'
import {
    MDBCardBody,
    MDBCardTitle,
    MDBCard,
    MDBCardText,
    MDBContainer,
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Profile() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePasswordChange = (event) => {
        event.preventDefault();
        axios.post('/change-password', {
            current_password: currentPassword,
            new_password: newPassword,
            new_password_confirmation: newPasswordConfirmation
        })
            .then((response) => {
                setSuccessMessage(response.data.message);
                setErrorMessage('');
                setCurrentPassword('');
                setNewPassword('');
                setNewPasswordConfirmation('');
            })
            .catch((error) => {
                setSuccessMessage('');
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('An error occurred while trying to change the password. Please try again later.');
                }
            });
    };

    const handleEmailChange = (event) => {
        event.preventDefault();
        axios.post('/change-email', {
            email: email
        })
            .then((response) => {
                setSuccessMessage(response.data.message);
                setErrorMessage('');
                setEmail('');
            })
            .catch((error) => {
                setSuccessMessage('');
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('An error occurred while trying to change the email. Please try again later.');
                }
            });
    };

        const [avatar, setAvatar] = useState(null);

        const handleAvatarChange = (event) => {
            setAvatar(event.target.files[0]);
        };

        const handleAvatarUpload = () => {
            const formData = new FormData();
            formData.append('avatar', avatar);

            axios.post('/avatar/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    setSuccessMessage('Avatar uploaded successfully.');
                    setErrorMessage('');
                })
                .catch((error) => {
                    setSuccessMessage('');
                    if (error.response && error.response.data) {
                        setErrorMessage(error.response.data.message);
                    } else {
                        setErrorMessage('An error occurred while trying to upload the avatar. Please try again later.');
                    }
                });
        };
    return (
        <MDBContainer fluid>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Profile</MDBCardTitle>
                    <hr />
                    {successMessage &&
                        <div className="alert alert-success" role="alert">
                            {successMessage}
                        </div>
                    }
                    {errorMessage &&
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    }
                    <form onSubmit={handlePasswordChange}>
                        <h5>Change password</h5>
                        <MDBInput type="password" style={{marginTop: '1rem'}} placeholder="Current password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                        <MDBInput type="password" style={{marginTop: '1rem'}} placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <MDBInput type="password" style={{marginTop: '1rem'}} placeholder="Confirm new password" value={newPasswordConfirmation} onChange={(e) => setNewPasswordConfirmation(e.target.value)} />
                        <MDBBtn style={{marginTop: '1rem'}} type="submit" color="primary">Change password</MDBBtn>
                    </form>
                    <hr />
                    <form onSubmit={handleEmailChange}>
                        <h5>Change email</h5>
                        <MDBInput type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <MDBBtn type="submit" color="primary">Change email</MDBBtn>
                    </form>
                    <hr />
                    <div className='mb-3'>
                        <label htmlFor='avatarInput' className='form-label'>
                            Avatar
                        </label>
                        <input
                            type='file'
                            className='form-control'
                            id='avatarInput'
                            name='avatar'
                            accept='image/*'
                            onChange={handleAvatarChange}
                        />
                    </div>
                    <MDBBtn color='primary' onClick={handleAvatarUpload}>
                        Save Changes
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
