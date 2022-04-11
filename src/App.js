import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import About from "./about";
import Home from "./home";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </main>


            <footer className="text-muted py-5">

                <div className="container">



                    <p className="float-end mb-1">
                        <a href="#">Back to top</a> <br/>
                        <Link to="/">Home</Link> <br/>
                        <Link to="/about">About</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
