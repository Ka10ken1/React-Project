import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import './css/UserProfile.css';

const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useKindeAuth();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        isAuthenticated && (
            <div className="user-profile">
                <div className="circle">
                    <div className="dropdown">
                        <p>{user.family_name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        )
    );
};

export default UserProfile;

