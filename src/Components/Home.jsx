import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Home</h1>
            {user?.email && <span>Hey{user.email}</span>}

        </div>
    );
};

export default Home;