// Allows React to utilize the component pages
import React, { Component } from 'react';
import Header from '../components/header.js'
import Footer from '../components/footer.js'



// allows react  to render whats on my homepage
class Home extends Component {
    render() {
        return (
            
            <div>
            
            <Header> </Header>
            <div className="container">
                <div className="row">
                    {/* <!-- I created a row within the container to help space out the code into  specific spaced out rows within the page.-->*/}
                    <div className="col-sm-8">
                        {/* <!-- I created the column in the page where the text and aligniing would only take 2/3 of the page for design purposes.-->*/}
                        <div className="page-header">
                            {/*</div> <!-- I created the page header to sigify  that the h1 class will be the header of the page.--> */}
                            <h1 className="block-header">About Me</h1>
                            {/* <!-- Added About Me text to show the start of my paragraph.--> */}
                        </div>

                        <div className="row">
                            {/*<!-- created another row  to organize a new section of the page.--> */}
                            <div className="col-sm-3">
                                {/*  <!-- I created the columm to space out the image on the page. --> */}
                                <div className="seperate">
                                    {/* <!-- created the "seperate" class to help space out and show the divideing  line between the "About Me" section and the "img" and "p" sections. "  --> */}
                                    <img src="images1/MyPhoto.jpeg" alt="Brian Levins Portrait" className="img-thumbnail"
                                        id="about-image" />
                                    {/*} <!-- Copy and pased an Image I found online into my Images file and added an Alt class. --> */}
                                </div>
                            </div>
                            <div className='col-sm-9>'>
                                {/* <!-- I created this column to help wrap up my "p" tags within the container.--> */}
                                <p>
                                    My name is Brian Levin and I am a junior front end and backend developer. I recently took a
                                    full dive into the world of software programming coming from a fitness background and I am
                                    excited to be part of this growing opportunity. I enjoy learning and cultivatibg my skills
                                    in front end and backend software. I'm looking forward to the great opportunities in the
                                    feild and making a positive contribution.
                            </p>
                                <hr />
                                <h4 id="contact information"> Contact Information </h4>
                                <h5 id='text-center'></h5>
                                <a href="bml201095@gmail.com">bml201095@gmail.com</a>
                                <a href="tel: 610-937-6248">610-937-6248</a>
                                <a
                                    href="https://drive.google.com/file/d/1Ubig4ad8KpI8fII9D2gns0vMORwlUoUo/view?usp=sharing">Resume</a>
                                <a href="https://github.com/BrianLevin"><img src='images1/GitHub_Logo.png'
                                    className='img-responsive' width='15%' /> </a>
                                <a href="https://www.linkedin.com/in/brian-levin-01a871b6/"><img src='images1/LI-Logo.png'
                                    className="image-responsive" width="15%" /></a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer>
                    
                </Footer>
            </div>
            
        )

    }


}

export default Home;