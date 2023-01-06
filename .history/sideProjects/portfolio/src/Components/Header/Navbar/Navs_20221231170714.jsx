import React from 'react';
import NavItem from './NavItem';

const Navs = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Khalid</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <NavItem text="Home" />
                        <NavItem text="Features" />
                        <NavItem text="Skill & Experience" />
                   
                    
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navs;
