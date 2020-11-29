import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function Record() {
    const [formObject, setFormObject] = useState({
        name: "",
        cookTime: "",
        ingredients: "",
        step1: "",
        cost: "",
        link: ""
    });
    return (
        <div>
            <Navbar/>
            <h1>record recipe</h1>
            <form>
            <label for="fname">Name</label>
            <input type="text" id="name" name="name"></input>
            <label for="lname">Cook Time</label>
            <input type="text" id="cook-time" name="cook-time"></input>
            <label for="lname">Ingredients</label>
            <input type="text" id="ingredients" name="ingredients"></input>
            <label for="lname">Step 1</label>
            <input type="text" id="step-1" name="step-1"></input>
            <label for="lname">Step 2</label>
            <input type="text" id="step-2" name="step-2"></input>
            <label for="lname">Step 3</label>
            <input type="text" id="step-3" name="step-3"></input>
            </form>
        </div>
    )
}
