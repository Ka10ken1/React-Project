import { Outlet, Link } from "react-router-dom";
import "./css/Layout.css";
import ToggleLanguage from "../languages/ToggleLanguage";
import { useTranslation } from "react-i18next";
import { FaSearch, FaHome } from "react-icons/fa";
import { MdOutlineLogin, MdOutlineImportContacts } from "react-icons/md";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import UserProfile from "../pages/UserProfile";
import Logo from "../pages/Logo";
import { useState } from "react";

function Layout() {
    const { login, isAuthenticated } = useKindeAuth();
    const [t, _] = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <Logo />
                </Link>
                <ul className="layout">
                    <li>
                        <Link to="/" className="link">
                            <FaHome />
                            {t("Home")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/booking" className="link">
                            <FaSearch />
                            {t("Booking")}
                        </Link>
                    </li>
                    <li className="dropdown">
                        <div className="link dropdown-toggle" onClick={toggleDropdown}>
                            <MdOutlineImportContacts />
                            {t("Contact")}
                        </div>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/contact" className="link">
                                        {t("Contact Us")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="link">
                                        {t("About Us")}
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        {!isAuthenticated && (
                            <button onClick={login} className="link">
                                <MdOutlineLogin />
                                {t("Login")}
                            </button>
                        )}
                    </li>
                    <li className="toggle-language">
                        <ToggleLanguage />
                    </li>
                </ul>
                <UserProfile />
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;

