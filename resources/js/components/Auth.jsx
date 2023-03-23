import React from "react";
import Navigation from "./navigation";
import Footer from "./footer"
import "./../../css/App.css";
import '../../css/bootstrap.min.css';
import '../../css/navbar.css';

export default function Auth(props) {
    return (
        <div>
            <Navigation username={props.username} />
            <div className="content">
                {/* Your content components go here */}
            </div>
            <Footer />
        </div>
    )
}
