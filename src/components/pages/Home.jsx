import React from "react";
import Slideshow from "./home/Slideshow";
import "./css/Home.css";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

function Home() {
    return (
        <div className="home">
            <div className="welcome-container">
                <h1 className="title">Welcome to Our Hotel</h1>
                <p className="subtitle">Experience luxury, comfort, and impeccable service.</p>
                <Link className="btn" to="/booking">Book Now</Link>
                <div className="info">
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>123 Main Street, City, Country</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>123-456-7890</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>
            <Slideshow />
            <div className="features">
                <h2>Our Features</h2>
                <div className="feature">
                    <i className="fas fa-utensils"></i>
                    <h3>Restaurant</h3>
                    <p>Indulge in a culinary experience like no other at our exquisite restaurant.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-swimming-pool"></i>
                    <h3>Swimming Pool</h3>
                    <p>Relax and unwind by our luxurious swimming pool.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-spa"></i>
                    <h3>Spa</h3>
                    <p>Pamper yourself with rejuvenating spa treatments.</p>
                </div>
            </div>
            <div className="footer">
                <div className="testimonial">
                    <h2>Testimonials</h2>
                    <div className="quote">
                        <p>"The best hotel experience I've ever had. Amazing service and attention to detail."</p>
                        <p>- John Doe</p>
                    </div>
                    <div className="quote">
                        <p>"Highly recommend this hotel to anyone looking for a luxurious getaway."</p>
                        <p>- Jane Smith</p>
                    </div>
                </div>
                <div className="celebrity-visits">
                    <h2>Honorary Celebrity Visits</h2>
                    <div className="visit">
                        <img src="/celebrity1.jpg" alt="Celebrity 1" className="celebrity-image" />
                        <p>"Had an amazing time at this hotel! The hospitality was top-notch."</p>
                        <p>Honny Deph</p>
                    </div>
                    <div className="visit">
                        <img src="/celebrity2.jpg" alt="Celebrity 2" className="celebrity-image" />
                        <p>"A beautiful place to relax and unwind. Highly recommend!"</p>
                        <p>- Celebrity Name 2</p>
                    </div>
                </div>

                <UserProfile />
            </div>

        </div>
    );
}

export default Home;

