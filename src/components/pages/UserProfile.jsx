import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import './css/UserProfile.css';
import { FaRegUserCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";

const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useKindeAuth();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        isAuthenticated && (
            <div className="user-profile">
                <div
                    className="user-icon"
                    onClick={() => setDropdownVisible(!isDropdownVisible)}
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                >
                    <FaRegUserCircle className="icon" size={40} />
                </div>
                {isDropdownVisible && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            <FaRegUserCircle className="dropdown-icon" />
                            <span>{user.family_name}</span>
                        </div>
                        <div className="dropdown-item">
                            <TfiEmail className="dropdown-icon" />
                            <span>{user.email}</span>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default UserProfile;

