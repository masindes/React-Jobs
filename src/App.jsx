
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, {jobLoarder} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';


const App = () => {
  // add new job
  const addJob = async (newJob) => {
    const res = await fetch('https://react-jobs-2tco.onrender.com/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newJob),
    })
    return;
  };
  
  // Delete job 
  const deleteJob = async (id) => {
    const res = await fetch(`https://react-jobs-2tco.onrender.com/jobs/${id}`, {
      method: 'DELETE',
  
    });
    return;
  };
  
  // Update job
  const updateJob = async (job) => {
    const res = await fetch(`https://react-jobs-2tco.onrender.com/jobs/${job.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
    <Route 
    path='/edit-job/:id' 
    element={<EditJobPage updateJobSubmit = {updateJob} />} 
    loader = {jobLoarder} 
    />
    <Route 
    path='/jobs/:id' 
    element={<JobPage deleteJob ={deleteJob}/>} 
    loader = {jobLoarder} 
    />
    <Route path='*' element={<NotFoundPage />} />
    </Route>),
  );
  return <RouterProvider router={router} />;
};
export default App