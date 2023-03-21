import React from 'react';
import { Image } from 'react-bootstrap';

function Avatar({ src, alt }) {
    return (
        <Image
            src={src}
            alt={alt}
            roundedCircle
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        />
    );
}

export default Avatar;
