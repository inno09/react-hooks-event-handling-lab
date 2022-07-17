// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function handleChange(event) {
        event.preventDefault();
        console.log('Entering password...')
    }

    return (
        <div>
            <input
                type="Password"
                onChange={handleChange}
                placeholder="Enter password..."
            />
        </div>
        // <form onChange={handleChange} placeholder="Enter password...">
        //     <input type="password" />
        // </form>
    )
}

export default Keypad
    