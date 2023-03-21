/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import './bootstrap';
import "./../css/bootstrap.min.css"
import "./../css/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
import ReactDOM from "react-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth username="Sam" />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
