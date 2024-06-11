import React from "react";
import Slideshow from "./home/Slideshow";
import "./css/Home.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {

    const { t, _ } = useTranslation();

    return (
        <div className="home">
            <div className="welcome-container">
                <h1 className="title">{t("Welcome to Our Hotel")}</h1>
                <p className="subtitle">{t("Experience luxury, comfort, and impeccable service")}.</p>
                <Link className="btn" to="/booking">{t("Book Now")}</Link>
                <div className="info">
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>123 {t("Main Street")}, {t("City")}, {t("Country")}</p>
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
                <h2>{t("Features")}</h2>
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
            </div>
        </div>
    );
}

export default Home;

