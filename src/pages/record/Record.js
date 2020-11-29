import React from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function Record() {
    return (
        <div>
            <Navbar/>
            <h1>record recipe</h1>
            <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname"></input>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname"></input>
            </form>
        </div>
    )
}
