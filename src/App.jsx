
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, {jobLoarder} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />} />
  <Route path='/jobs' element={<JobsPage />} />
  <Route path='/add-job' element={<AddJobPage />} />
  <Route path='/jobs/:id' element={<JobPage />} loader = {jobLoarder} />
  <Route path='*' element={<NotFoundPage />} />
  </Route>),
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App