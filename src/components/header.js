// Allows React to utilize the component pages
import React, { Component } from 'react';

// allows react  to render whats on my homepage
class Header extends Component {
    render() {
        return (

            
            
        
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <a className="navbar-brand" href="/" id="logo">Brian Levin</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="/portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">About</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </nav>

        )

    }
}

export default Header;