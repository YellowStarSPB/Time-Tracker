import { ReactNode } from 'react';
import { useAppSelector } from '../../app/store/store-hooks';
import {  Navigate, useLocation } from 'react-router-dom';

type PropsWithChildren = { children: ReactNode };

function RequiredAuth({ children }: PropsWithChildren) {
    const location = useLocation();
    const token = useAppSelector((state) => state.auth.user.token);

    if (!token) {
        return <Navigate to={'/login'} state={{ from: location }} />;
    }

    return children;
}

export default RequiredAuth;
