import React from "react";
import "./css/ContactForm.css";
import { useTranslation } from "react-i18next";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
    const { t, _ } = useTranslation();

    return (
        <div className="contact-container">

            <div className="about-us">
                <h2>{t("About Us")}</h2>
                <p>
                    {
                        t("Welcome to our company! We are dedicated to providing the best service in the industry. Our team is passionate, skilled, and ready to assist you with any inquiries you may have. Our mission is to ensure customer satisfaction through excellence and innovation.")
                    }
                </p>
            </div>

            <div className="contact-form">
                <h2>{t("Contact Us")}</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">{t("Name")}</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{t("Email")}</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t("Message")}</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">
                        <IoIosSend />
                        {t("Send")}
                    </button>
                </form>
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>123-456-7890</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

