import { useRouter } from 'next/router';
import React from 'react';
import Nav from './Nav'; // Import the Nav component
import Mainvisual from '@/components/Mainvisual'
const Header: React.FC = () => {

    return (
        <>
            {/* <Mainvisual /> */}
            <Nav /> {/* Use the Nav component */}
        </>
    );
}

export default Header;
