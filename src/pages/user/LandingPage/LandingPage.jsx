import React, { useState } from 'react';
import openEye from '../../assets/icons/open-eye-password.png';
import closeEye from '../../assets/icons/close-eye-password.png';
import './Landing.css'; // Import the CSS file

function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="landing">
            <div className="landing__header">
                <button className="landing__sign-in-btn">
                    Sign In
                </button>
            </div>
            <div className="landing__content">
                <h2 className="landing__welcome-message">Welcome to your personal library</h2>
                <form className="landing__form">
                    <label htmlFor="email_or_phone" className="landing__label">Email or phone</label>
                    <div>
                        <input type="text" id="email_or_phone" name="email_or_phone" className="landing__input" />
                    </div>
                    <label htmlFor="password" className="landing__label">Password</label>
                    <div className="landing__password-container">
                        <input
                            type={isOpen ? "text" : "password"}
                            id="password"
                            name="password"
                            className="landing__input"
                        />
                        <img
                            src={isOpen ? openEye : closeEye}
                            alt={isOpen ? "openEye" : "closeEye"}
                            className="landing__toggle-password"
                            onClick={() => setIsOpen(state => !state)}
                        />
                    </div>
                </form>
                <h3 className="landing__forgot-password">Forgot Password?</h3>
                <div className="landing__buttons">
                    <button className="landing__button">Sign In</button>
                    <button className="landing__button">Continue with Google</button>
                    <button className="landing__button">New to LitLib? Join Now</button>
                </div>
            </div>
        </div>
    );
}

export { LandingPage };