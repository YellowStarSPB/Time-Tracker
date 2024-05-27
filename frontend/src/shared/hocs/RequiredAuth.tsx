import { ReactNode } from 'react';
import { useAppSelector } from '../../app/store/store-hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from '../../features/auth/model/selectors';

type PropsWithChildren = { children: ReactNode };

function RequiredAuth({ children }: PropsWithChildren) {
    const location = useLocation();
    const token = useAppSelector(selectToken);

    if (!token) {
        return <Navigate to={'/login'} state={{ from: location }} />;
    }

    return children;
}

export default RequiredAuth;
