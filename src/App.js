import logo from './logo.svg';
import './App.css';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Expenses from "./expenses";
import Invoices from "./invoices";

function App() {
    return (
        <div className="App">
            <main>
                {/*<Routes>*/}
                {/*        <Route path='/home1' element={<Home1/>} />*/}
                {/*    /!*<Route path="/about">*!/*/}
                {/*    /!*    <About />*!/*/}
                {/*    /!*</Route>*!/*/}
                {/*    /!*<Route path="/dashboard">*!/*/}
                {/*    /!*    <Dashboard />*!/*/}
                {/*    /!*</Route>*!/*/}
                {/*</Routes>*/}

                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="expenses" element={<Expenses />} />
                        <Route path="invoices" element={<Invoices />} />
                    </Routes>

            </main>


            <footer className="text-muted py-5">
                <div className="container">
                    <p className="float-end mb-1">
                        <a href="#">Back to top</a>
                    </p>
                    <Link to="/">Home1</Link>
                    {/*<Link to="/">Home</Link><br/>*/}
                    {/*<Link to="/about">About</Link>*/}

                    <Link to="/invoices">Invoices</Link> |{" "}
                    <Link to="/expenses">Expenses</Link>
                </div>
            </footer>
        </div>
    );
}

function Home1() {
    return (
        <div>
            <h2>Home1</h2>
        </div>
    );
}

export default App;
