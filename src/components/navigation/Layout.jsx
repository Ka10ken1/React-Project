import { Outlet, Link } from "react-router-dom";
import "./css/Layout.css"
import ToggleLanguage from "../languages/ToggleLanguage";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";


function Layout() {

    const [t, _] = useTranslation();

    return <>
        <ul className="layout">
            <li>
                <Link to="/">
                    <FaHome />
                </Link>
            </li>
            <li>
                <Link to="/booking">
                    <FaSearch />
                    {t("Booking")}
                </Link>
            </li>

            <li>
                <Link to="/login">
                    <MdOutlineLogin />
                    {t("Login")}</Link>
            </li>
            <li>
                <Link to="/signup">{t("SignUp")}</Link>
            </li>
            <li>
                <ToggleLanguage />
            </li>
        </ul>

        <Outlet></Outlet>
    </>
}


export default Layout;
