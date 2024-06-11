import { Outlet, Link } from "react-router-dom";
import "./css/Layout.css"
import ToggleLanguage from "../languages/ToggleLanguage";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


function Layout() {

    const { login } = useKindeAuth();

    const [t, _] = useTranslation();

    return (
        <>
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
                    <button onClick={login} className="link">
                        <MdOutlineLogin />
                        {t("Login")}
                    </button>
                </li>
                <li>
                    <ToggleLanguage />
                </li>
            </ul>
            <Outlet />
        </>
    );
}


export default Layout;

