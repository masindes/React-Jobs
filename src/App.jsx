
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, {jobLoarder} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';



const App = () => {
  // add new job
  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newJob),
    })
    return;
  };
  
  // Delete job 
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: 'DELETE',
  
    });
    return;
  };
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
    <Route path='/jobs/:id' element={<JobPage deleteJob ={deleteJob}/>} loader = {jobLoarder} />
    <Route path='*' element={<NotFoundPage />} />
    </Route>),
  );
  return <RouterProvider router={router} />;
};
export default App