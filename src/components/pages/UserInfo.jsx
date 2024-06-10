import { useState } from 'react';
import "./css/UserInfo.css";

function UserInfo({ name, email }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="user-info-box"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src="path/to/demo-logo.png" alt="Demo Logo" className="demo-logo" />
            {hovered && (
                <div className="user-info">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
            )}
        </div>
    );
}

export default UserInfo;

