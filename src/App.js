import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogDetails";

function App() {
    return (
        <Router>

            <div>
                <Navbar/>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/Create">
                            <Create/>
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails/>
                        </Route>

                    </Switch>
                </div>
            </div>


        </Router>


    );
}

export default App;
