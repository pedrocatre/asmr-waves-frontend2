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

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>

                    <p className="float-end mb-1">
                        <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">Album example is © Bootstrap, but please download and customize it for
                        yourself!</p>
                    <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a
                        href="/docs/5.1/getting-started/introduction/">getting started guide</a>.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
