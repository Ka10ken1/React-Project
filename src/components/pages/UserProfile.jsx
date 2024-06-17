import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import './css/UserProfile.css';
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";

const UserProfile = () => {
    const { user, isAuthenticated, isLoading, logout } = useKindeAuth();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    if (isLoading) {
        return <p>Loading...</p>;
    }

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
                            {user.picture ? (
                                <img src={user.picture} alt="Profile" className="profile-picture" />
                            ) : (
                                <FaRegUserCircle className="profile-icon" size={60} />
                            )}
                            <div className="profile-name">
                                <span>{user.given_name} {user.family_name}</span>
                            </div>
                        </div>
                        <div className="profile-info">
                            <div className="dropdown-item">
                                <TfiEmail className="dropdown-icon" />
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

