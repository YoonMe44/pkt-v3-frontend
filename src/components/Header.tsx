import { useRouter } from 'next/router';
import React from 'react';
import Nav from './Nav'; // Import the Nav component
const Header: React.FC = () => {

    return (
        <div>
            {/* <Mainvisual /> */}
            <Nav /> 
        </div>
    );
}

export default Header;
