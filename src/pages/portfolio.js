


// Allows React to utilize the component pages
import React, { Component } from 'react';
import Header from '../components/header.js'
import Footer from '../components/footer.js'

// allows react  to render whats on my homepage
class Portfolio extends Component {
    render() {
        return (
            <div>
            <Header> </Header>
            <div className="container">
                {/* <!-- I wrapped all my elements, classes, and tags within the container class on this page to keep the code organized.--> */}
                <div className="row">
                    {/* <!-- I created this row to help space out the code within an organzied row on the page.--> */}
                    <div className="col-sm-8">
                        {/*  <!-- I created this column to  put my elements within 2/3s of the page.--> */}
                        <div className="page-header">
                            {/* <!-- I created this class to sigify where my header is on the page--> */}

                        </div>
                    </div>
                </div>
                <h1 className="block-header">Portfolio</h1>


                <div className="row">
                    {/* <!-- I created this row to space out the next section of the page.--> */}


                    <div className="col-sm-12">
                        {/* <!-- I created this column to align my Portfolio Cards into one  full colum of code.--> */}

                        <div className="seperate">
                            {/*} <!-- I created this class to visibly seperate my portfolio title from the portfolio images. --> */}
                            {/* <!--I copied and pasted  a card formot layout from bootstrap--> */}
                            <div className="row row-cols-1 row-cols-md-3">
                                {/* <!-- I copied and pasted multiple images from unspalsh and used them as individual seperate images for my projects.--> */}
                                <div className="col mb-4">
                                    {/*  <!-- I used Alt Images to show which project the image is just in case the image doesnt show. I also described each project in chronological order.--> */}
                                    <div className="card h-100">
                                        {/*  <!-- I added empty links to each of my projects which will eventually be real links to the projects.--> */}
                                        <img src="images1/gluttons&alcoholics.png" className="image-responsive" width="100%"
                                            alt="Gluttons and Alcoholics Home Page" />
                                        <div className="card-body">
                                            <h5 className="card-title">Gluttons And Alcoholics</h5>
                                            <p className="card-text">Due to the Covid 19 Pandemic, our group decided to create an
                                                application which allowed users to search for meals by ingredients and dietary
                                                prefrences. This project was created with the Ulkit CSS framework, JavaScript, and
                                    JQuery. We utilized the Edaman Recipe API and The CockTailDB API. </p>
                                            <a href="https://brianlevin.github.io/gluttons-and-alcoholics/"> Deployed
                                    Application</a>
                                            <a href="https://github.com/BrianLevin/gluttons-and-alcoholics">GitHub Repository</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="images1/Weatherapp.png" className="image-responsive" width="100%"
                                            alt="Weather Dashboard Home Page" />
                                        <div className="card-body">
                                            <h5 className="card-title">Weather DashBoard</h5>
                                            <p className="card-text">Isn't it great to know the weather for the next 5 days in multiple
                                                cities? In this project, thats exactly what we did with obtaining the temperature,
                                                humidity, and the weather for the selected city. The languages Included using Html
                                                and Css for the content and styling. I used JavaScript and Jqquery for the
                                    functinality and used the Weather.org API and an Ajax call to fetch the data. </p>
                                            <a href="https://brianlevin.github.io/Weather-Dashboard/">Deployed Application</a>
                                            <a href="https://github.com/BrianLevin/Weather-Dashboard"> GitHub Repository</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="images1/RandomPasswordGenerator.png" className="image-responsive" width="100%"
                                            alt="Random Password Generator Homepage" />
                                        <div className="card-body">
                                            <h5 className="card-title">Random Password Generator</h5>
                                            <p className="card-text">Sometimes it's just to hard to come up with your own password. In
                                                this project. I created a Random Password Generator which included prompts for the
                                                user to choose from. The Syntax used for this assignment consisted of Html for the
                                                webpage conttent and a BootStrap CSS framework. JavaScript was also utilized to
                                    create the random functionality of the password. </p>
                                            <a href="https://brianlevin.github.io/Brian-Levin-Homework-3/">Deployed Application </a>
                                            <a href="https://github.com/BrianLevin/Brian-Levin-Homework-3">GitHub Repository</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="images1/main.png" className="card-img-top" width="100%"
                                            alt="future project goes here" />
                                        <div className="card-body">
                                            <h5 className="card-title">Personal Training Portal</h5>
                                            <p className="card-text"> Finally, A database to manage my personal training clients! This
                                                database allows the user to sign up, then the manager adds all their personal
                                                information, and then from their the manager can add and delete notes about each
                                                client that has signed up and added their information. For this project we used the
                                                frame works and libraries:
                                    Materialize, Handlebars, Node Js, Express Js, and mySQL.</p>
                                            <a href="https://personal-trainer-portal.herokuapp.com/">Deployed Application</a>
                                            <a href="https://github.com/BrianLevin/Personal-Trainer-Portal">Github Repository</a>

                                        </div>
                                    </div>
                                </div>

                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="images1/Notetaker.png" className="card-img-top" width="100%" alt="Note Taker" />
                                        <div className="card-body">
                                            <h5 className="card-title">Note Taker</h5>
                                            <p className="card-text">Write down, save, and delete daily notes using backend development!
                                                This is a great application for note taking. The frame works and libraries used
                                                included: Html, Css, Javascript, Node Js, Express Js.
                                </p>
                                            <a href="https://serene-crag-34434.herokuapp.com/">Deployed Application</a>
                                            <a href="https://github.com/BrianLevin/Note-Taker">Github Repository</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="images1/CalenderSchedule.png" className="card-img-top" width="100%"
                                            alt="future project goes here" />
                                        <div className="card-body">
                                            <h5 className="card-title">Daily Calender</h5>
                                            <p className="card-text">Plan your day with a daily calender which will show the past
                                                current and future time and save events for those time blocks! Syntax used included
                                    HTML, CSS, Javascript, Jquery, and Moment Js.</p>
                                            <a href="https://brianlevin.github.io/Work-Day-Scheduler/">Deployed application</a>
                                            <a href="https://github.com/BrianLevin/Work-Day-Scheduler">Github Repository</a>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>

        )


    }
}

export default Portfolio;