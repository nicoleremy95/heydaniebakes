import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="Navbar">
            <a href="/"><img src={logo} className="Navbar-title"/></a>
                <div className="Navbar-actions">
                    <div className="Navbar-dropdown">
                        <button className="Navbar-button">RECIPES</button>
                            <div className="Navbar-dropdown-content">
                                <a href="/recordrecipies">RECORD RECIPE</a>
                                <a href="/raterecipies">RATE RECIPE</a>
                            </div>
                    </div>
                    <div className="Navbar-dropdown">
                        <button className="Navbar-button">TO DOS</button>
                            <div className="Navbar-dropdown-content">
                                <a href="/todo">TO DO</a>
                                <a href="/todo">TO DO</a>
                            </div>
                    </div>
                    <div className="Navbar-dropdown">
                        <button className="Navbar-button">SPONSORSHIPS</button>
                            <div className="Navbar-dropdown-content">
                                <a href="/sponsorships">SPONSORSHIP</a>
                                <a href="/sponsorships">SPONSORSHIP</a>
                            </div>
                    </div>
                    <div className="Navbar-dropdown">
                        <button className="Navbar-button">CONTENT</button>
                            <div className="Navbar-dropdown-content">
                                <a href="/photos">PHOTOS</a>
                                <a href="/videos">VIDEOS</a>
                            </div>
                    </div>
                </div>
        </div>
    )
}
