// Allows React to utilize the component pages
import React, { Component } from 'react';

// allows react  to render whats on my homepage
class Footer extends Component {
    render() {
        return (

            
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
            <div className="container text-center">
                <small>Copyright &copy; Brian's Portfolio</small>
            </div>
        </footer>
        
            

        )

    }
}

export default Footer;