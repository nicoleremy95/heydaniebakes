import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="Navbar">
            <h1>hey danie bakes</h1>
            <div className="Navbar-dropdown">
                <span>RECIPIES</span>
                    <div className="Navbar-dropdown-content">
                        <p>RECORD RECIPE</p>
                        <p>RATE RECIPE</p>
                    </div>
            </div>
            <div className="Navbar-dropdown">
                <span>TO DOS</span>
                    <div className="Navbar-dropdown-content">
                        <p>TO DO E</p>
                        <p>TO DO</p>
                    </div>
            </div>
            <div className="Navbar-dropdown">
                <span>SPONSORSHIPS</span>
                    <div className="Navbar-dropdown-content">
                        <p>SPONSORSHIPE</p>
                        <p>SPONSHORSHIP</p>
                    </div>
            </div>
        </div>
    )
}
