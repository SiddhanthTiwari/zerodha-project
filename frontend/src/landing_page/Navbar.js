import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Custom CSS

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
            if (window.innerWidth > 991) setIsDropdownOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isDropdownOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setIsDropdownOpen(false);
            }
        };
        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsDropdownOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isDropdownOpen]);

    useEffect(() => {
        document.body.style.overflow = isMobile && isDropdownOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobile, isDropdownOpen]);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg border-bottom bg-white">
                <div className="container p-2">
                    <Link className="navbar-brand" to="/">
                        <img src="/media/images/logo.svg" alt="Logo" style={{ width: '25%' }} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-content-wrapper">
                            <ul className="navbar-nav navbar-nav-left">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/support">Support</Link>
                                </li>
                            </ul>

                            {/* Right Section with Three Dots */}
                            <div className="navbar-nav-right">
                                <div className="three-dot-container">
                                    <button
                                        ref={buttonRef}
                                        className="btn three-dot-btn"
                                        onClick={toggleDropdown}
                                        type="button"
                                        aria-label="User menu"
                                        aria-expanded={isDropdownOpen}
                                    >
                                        ⋮
                                    </button>

                                    {isDropdownOpen && (
                                        <>
                                            <div
                                                ref={dropdownRef}
                                                className="dropdown-menu show custom-dropdown-menu"
                                                style={isMobile ? {
                                                    position: 'fixed',
                                                    top: buttonRef.current?.getBoundingClientRect().bottom + 8 + 'px',
                                                    right: '15px'
                                                } : {}}
                                            >
                                                <Link className="dropdown-item custom-dropdown-item" to="/signup" onClick={closeDropdown}>SignUp</Link>
                                                <Link className="dropdown-item custom-dropdown-item" to="/login" onClick={closeDropdown}>Login</Link>
                                            </div>
                                            {isMobile && <div className="dropdown-overlay" onClick={closeDropdown} />}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
