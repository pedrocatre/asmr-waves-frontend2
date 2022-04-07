import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    {/*<Route path="/" element={<App />} />*/}
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="invoices" element={<Invoices />} />
                </Routes>
            </main>


            <footer className="text-muted py-5">
                <div className="container">

                    <Link to="/invoices">Invoices</Link>
                    <Link to="/expenses">Expenses</Link>

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
