// components/PageTitle.tsx
import React from 'react';
import Image from 'next/image'
interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            
        </div>
    );
};

export default PageTitle;
