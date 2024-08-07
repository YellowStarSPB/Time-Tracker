import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/store-hooks';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { selectToken } from '../../features/auth/model/selectors';
import { handleAuthorization } from '../../features/auth/api/authorizationApi';

const preloader = document.getElementById('curtain');

function RequiredAuth() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const token = useAppSelector(selectToken);
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: false, state: { from: location } });
            preloader?.classList.add('loaded');
            return;
        }
        console.log(1)
        if (!isAuthenticated) {
            dispatch(
                handleAuthorization({
                    endPoint: 'api/authorization',
                    token: token,
                }),
            ).then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    preloader?.classList.add('loaded');
                } else if (res.meta.requestStatus === 'rejected') {
                    navigate('/login', { replace: false,state: { from: location }});
                    preloader?.classList.add('loaded');
                }
            });
        }
    }, [isAuthenticated]);

    if (isAuthenticated) {
        return <Outlet />;
    }
}

export default RequiredAuth;
