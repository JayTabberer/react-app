import React from 'react';

//Class components need render() and return()
//functional components need just need return()

const Navbar = () => {
    return(
        <div>
            <ul>
                <li id="about">About page</li>
                <li id="employment">Employment</li>
                <li id="projects">Projects</li>
                <li id="contact">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;