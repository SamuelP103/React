
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import './footer.css';

function Footer() {
    return (
        <footer>
            <div>
                <div className='footerHeader'>
                    <h1><b>QuantumPulse </b>Center</h1>
                </div>
                <div className="footFlex">
                    <div className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                            Home
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/catalog">
                            Catalog
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">
                            About me
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
