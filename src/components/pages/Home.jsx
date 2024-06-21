import React from "react";
import Slideshow from "./home/Slideshow";
import "./css/Home.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home">
            <div className="welcome-container">
                <h1 className="title">{t("Welcome to Luxury Hotel")}</h1>
                <p className="subtitle">{t("Experience luxury, comfort, and impeccable service")}.</p>
                <Link className="btn" to="/booking">{t("Book Now")}</Link>
            </div>
            <Slideshow />
            <div className="features">
                <h2>{t("Features")}</h2>
                <div className="feature">
                    <i className="fas fa-utensils"></i>
                    <h3>{t("Restaurant")}</h3>
                    <p>{t("Indulge in a culinary experience like no other at our exquisite restaurant.")}</p>
                </div>
                <div className="feature">
                    <i className="fas fa-swimming-pool"></i>
                    <h3>{t("Swimming Pool")}</h3>
                    <p>{t("Relax and unwind by our luxurious swimming pool.")}</p>
                </div>
                <div className="feature">
                    <i className="fas fa-spa"></i>
                    <h3>{t("Spa")}</h3>
                    <p>{t("Pamper yourself with rejuvenating spa treatments.")}</p>
                </div>
            </div>
            <div className="testimonial">
                <h2>{t("Testimonials")}</h2>
                <div className="quote">
                    <p>"{t("The best hotel experience I've ever had. Amazing service and attention to detail.")}"</p>
                    <p>- John Doe</p>
                </div>
                <div className="quote">
                    <p>"{t("Highly recommend this hotel to anyone looking for a luxurious getaway.")}"</p>
                    <p>- Jane Smith</p>
                </div>
            </div>
            <div className="footer">
                <p>{t("© 2024 Our Hotel. All rights reserved.")}</p>
            </div>
        </div>
    );
}

export default Home;

