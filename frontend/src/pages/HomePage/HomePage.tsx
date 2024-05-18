import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../app/store/auth/authSlice';

function HomePage() {
    const selector = useSelector((state) => state.auth);
    const des = useDispatch();
    return (
        <div>
            <button onClick={() => des(setUser({id:1}))}>12231312</button>
        </div>
    );
}

export default HomePage;
