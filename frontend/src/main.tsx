import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app/App.tsx';
//RTK store
import store from './app/store/store.ts';
import './app/App.scss';

ReactDOM.createRoot(document.getElementById('app-container')!).render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <React.StrictMode> */}
            <App />
            {/* </React.StrictMode> */}
        </BrowserRouter>
    </Provider>,
);
