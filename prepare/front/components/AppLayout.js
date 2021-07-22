import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children }) => {
    return (
        <div>
            <Link href="/"><a>nodeBird</a></Link>
            <Link href="/profile"><a>profile</a></Link>
            <Link href="/signup"><a>signup</a></Link>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;