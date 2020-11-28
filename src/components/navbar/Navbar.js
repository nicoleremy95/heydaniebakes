import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="Navbar">
            <h1 className="Navbar-title">hey danie bakes</h1>
                <div className="Navbar-actions">
                    <div className="Navbar-dropdown">
                        <button className="Navbar-button">RECIPES</button>
                            <div className="Navbar-dropdown-content">
                                <a href="/recordrecipies">RECORD RECIPE</a>
                                <a href="#">RATE RECIPE</a>
                            </div>
                    </div>
                    <div className="Navbar-dropdown">
                        <button className="Navbar-button">TO DOS</button>
                            <div className="Navbar-dropdown-content">
                                <a href="#">TO DO</a>
                                <a href="#">TO DO</a>
                            </div>
                    </div>
                    <div className="Navbar-dropdown">
                        <button className="Navbar-button">SPONSORSHIPS</button>
                            <div className="Navbar-dropdown-content">
                                <a href="#">SPONSORSHIP</a>
                                <a href="#">SPONSORSHIP</a>
                            </div>
                    </div>
                    <div className="Navbar-dropdown">
                        <button className="Navbar-button">CONTENT</button>
                            <div className="Navbar-dropdown-content">
                                <a href="#">PHOTOS</a>
                                <a href="#">VIDEOS</a>
                            </div>
                    </div>
                </div>
        </div>
    )
}
