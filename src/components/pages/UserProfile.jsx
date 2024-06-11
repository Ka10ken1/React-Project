import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import './css/UserProfile.css';
import { FaRegUserCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useKindeAuth();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        isAuthenticated && (
            <div className="user-profile">
                <div className="circle">
                    <FaRegUserCircle className="coloring" size={40} />
                    <div className="dropdown">
                        <p>
                            {user.family_name}
                        </p>
                        <p>
                            <TfiEmail />

                            {user.email}
                        </p>
                    </div>
                </div>
            </div>
        )
    );
};

export default UserProfile;

