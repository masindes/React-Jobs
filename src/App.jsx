
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import HomeCards from './Components/HomeCards';
import JobListings from './Components/JobListings';
import ViewAllJobs from './Components/ViewAllJobs';


import React from 'react'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
     </>
  );
};
export default App