import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="myClass">
            <h1>hello</h1>
            {children}
        </div>
    );
};

export default Layout;
