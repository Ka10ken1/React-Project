import { Outlet, Link } from "react-router-dom";
import "./css/Layout.css";
import ToggleLanguage from "../languages/ToggleLanguage";
import { useTranslation } from "react-i18next";
import { FaSearch, FaHome } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import UserProfile from "../pages/UserProfile";

function Layout() {
    const { login, isAuthenticated } = useKindeAuth();
    const [t, _] = useTranslation();

    return (
        <>
            <nav className="navbar">
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

