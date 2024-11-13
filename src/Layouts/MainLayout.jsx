import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Components/Navbar';
const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer />  {/* Add this line to display toast notifications */}
    </>
  )
}

export default MainLayout