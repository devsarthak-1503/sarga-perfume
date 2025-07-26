import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>SARGA Perfumes</h3>
                <p>Unleashing your essence with every note.</p>

                <p className="copyright">
                    © {new Date().getFullYear()} SARGA Perfumes. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
