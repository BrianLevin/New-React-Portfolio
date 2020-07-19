
import React from 'react';
// BrowseRouter, Switch, Route adds the router so it lets switch differant pages in react
import {BrowserRouter, Switch, Route} from "react-router-dom"

// Imporages pages folder
import Home from './pages/home';

import Portfolio from './pages/portfolio';

//  component that shows our full application
function App() {

return (
<div className= "App"> 
    
<BrowserRouter>   {/*  react know that you are using it in the browser*/}
<Switch> {/*switch between routes when you have multiple*/}

<Route exact path= "/" component= {Home} /> {/*shows that page for the certain route that I choose*/}
<Route exact path= "/portfolio" component= {Portfolio} /> {/*shows that page for the certain route that I choose*/}
</Switch>

</BrowserRouter>

</div>

);


}

export default App;