import React from "react"
import Home from "./Home"
import Blog from "./Blog"
import About from "./About"
import Design from "./Design"
import Contact from "./Contact"
import { Redirect, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar"

const App = () => {
    return (
        <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/design" component={Design} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/" />
                </Switch>
        </>
    )
}

export default App;