import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import './css/UserProfile.css';
import { FaUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useState } from "react";

const UserProfile = () => {
    const { user, isAuthenticated, isLoading, logout } = useKindeAuth();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    console.log('User data:', user);

    return (
        isAuthenticated && (
            <div className="user-profile">
                <div
                    className="user-icon"
                    onClick={() => {
                        setDropdownVisible(!isDropdownVisible);
                    }}
                >
                    <FaUser className="icon" size={30} />
                </div>
                {isDropdownVisible && (
                    <div className="dropdown-menu">
                        <div className="profile-header">
                            <img src="/profile.png" alt="Profile" className="profile-picture" />
                            <div className="profile-name">
                                <span>{user.given_name} {user.family_name}</span>
                            </div>
                        </div>
                        <div className="profile-info">
                            <div className="dropdown-item">
                                <HiOutlineMailOpen className="dropdown-icon" />
                                <span>{user.email}</span>
                            </div>
                            <div className="dropdown-item">
                                <span>{user.nickname}</span>
                            </div>
                            <div className="dropdown-item logout-button" onClick={logout}>
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default UserProfile;

