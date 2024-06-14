import React from 'react';
import './App.css';
import Nav from './components/navigation/Nav';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";


function App() {

    return (
        <div className='app'>
            <KindeProvider
                clientId="d4f34628d9e44bc79a48fb30c35ce4d8"
                domain="https://hotelmanagment.kinde.com"
                logoutUri={window.location.origin}
                redirectUri={window.location.origin}
            >
                <Nav />
            </KindeProvider>
        </div>
    );
}

export default App;

