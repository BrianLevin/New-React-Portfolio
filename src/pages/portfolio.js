


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
                                            <img src="images1/google.png" className="image-responsive" width="100%"
                                                alt="Google-Book-Search" />
                                            <div className="card-body">
                                                <h5 className="card-title">Google Book Search</h5>
                                                <p className="card-text"> There is no better way to find and buy your favorite books using Googles book search API! with this application users can search for a selected book, view  and or save that book so they can purchase later, or delete the selected saved book. This project was built using  React, Node, Express, and MongoDB</p>
                                                <a href="https://google-book-search-app-finder.herokuapp.com/">Deployed Application</a>
                                                <a href="https://github.com/BrianLevin/Google-Book-Search"> GitHub Repository</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-4">
                                        <div className="card h-100">
                                            <img src="images1/workout.png" className="image-responsive" width="100%"
                                                alt="Workout-Tracker" />
                                            <div className="card-body">
                                                <h5 className="card-title">Workout Tracker</h5>
                                                <p className="card-text"> Wouldn't it be great to create and track your daily workouts? well now you can! This application allows users to  create, track, and save  their daily workouts  including the type, weight, sets, reps, duration  and  distanced traveled with cardio based workouts.  </p>
                                                <a href="https://workout-tracker123.herokuapp.com/?id=5ef685193eeb65001749e0bc">Deployed Application </a>
                                                <a href="https://github.com/BrianLevin/Workout-Tracker">GitHub Repository</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-4">
                                        <div className="card h-100">
                                            <img src="images1/main.png" className="card-img-top" width="100%"
                                                alt="Personal Training Portal" />
                                            <div className="card-body">
                                                <h5 className="card-title">Personal Training Portal</h5>
                                                <p className="card-text"> Finally, A database to manage my personal training clients that my group and I built! This
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
                                            <img src="images1/indescision.png" className="card-img-top" width="100%" alt="Expensify" />
                                            <div className="card-body">
                                                <h5 className="card-title">Indecision App</h5>
                                                <p className="card-text"> An Application that allows users  to post options what they need to do and then  the user will click a button which will ramdonly select and choose what task they should do and complete.
                                </p>
                                                <a href="https://indescision.herokuapp.com/">Deployed Application</a>
                                                <a href="https://github.com/BrianLevin/Indecision-App">Github Repository</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-4">
                                        <div className="card h-100">
                                            <img src="images1/directory.png" className="card-img-top" width="100%"
                                                alt="Directory" />
                                            <div className="card-body">
                                                <h5 className="card-title">Employee Directory</h5>
                                                <p className="card-text">Find employees in your company using a Directory! This react based employee directory allows users sor through employees name alphabetically or  specifically filter through and look up  the employees name.  </p>
                                                <a href="https://employee-directory4.herokuapp.com/">Deployed application</a>
                                                <a href="https://github.com/BrianLevin/Employee-Directory">Github Repository</a>

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