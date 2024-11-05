import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>Mayank Kunjam</h3>
                    <p>
                        I am a web developer passionate about building web applications that enhance user experience.
                    </p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Details</h3>
                    <p><strong>Address:</strong> jawanga,Dantewada,Chhattisgarh</p>
                    <p><strong>Location:</strong>Dantewada,Chhattisgarh </p>
                    <p><strong>Email:</strong> mayankkunjam23@navgurukul.org</p>
                    <p><strong>Phone:</strong> +91 6261946153</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
