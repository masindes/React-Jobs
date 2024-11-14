import React from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData(jobLoader, { id });

  // Function to handle the delete button click
  const onDeleteClick = (jobId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this job?');
    if (!confirmDelete) return;

    deleteJob(jobId);
    toast.success('Job deleted successfully');
    navigate('/jobs');
  };

  return (
    <>
      {/* Back to Job Listings */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
          </Link>
        </div>
      </section>

      {/* Job Details */}
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            {/* Main Content */}
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">Job Description</h3>
                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
                <p className="mb-4">{job.salary}/ Year</p>
              </div>
            </main>

            {/* Sidebar */}
            <aside>
              {/* Company Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.company.name}</h2>
                <p className="my-2">{job.company.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactEmail}</p>

                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
              </div>

              {/* Manage Job */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-blue-900 hover:bg-black text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// Loader function to fetch job data
const jobLoader = async ({ params }) => {
  const response = await fetch(`http://localhost:5000/jobs/${params.id}`);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

export { JobPage as default, jobLoader };
