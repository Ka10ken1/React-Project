import React from "react";
import Slideshow from "./home/Slideshow";
import "./css/Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="welcome-container">
                <h1>Welcome to Our Hotel</h1>
                <p>Experience luxury, comfort, and impeccable service.</p>
                <button className="btn"><Link to="/book">Book Now</Link></button>
                <div className="info">
                    <div>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>123 Main Street, City, Country</p>
                    </div>
                    <div>
                        <i className="fas fa-phone-alt"></i>
                        <p>123-456-7890</p>
                    </div>
                    <div>
                        <i className="fas fa-envelope"></i>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>
            <Slideshow />
        </div>
    );
}

export default Home;

