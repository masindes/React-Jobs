
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />),
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App