import { createBrowserRouter } from 'react-router-dom';

import MainPage from '~pages/MainPage';

const Router = createBrowserRouter([{ path: '/', element: <MainPage /> }]);

export default Router;