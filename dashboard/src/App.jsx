import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddNewDoctor from "./pages/AddNewDoctor";
import Login from "./pages/Login";
import AddNewAdmin from "./pages/AddNewAdmin";
import Messages from "./pages/Messages";
import Doctors from "./pages/Doctors";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import axios from "axios";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setAdmin } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          {
            withCredentials: true,
          }
        );

        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctor/addnew" element={<AddNewDoctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/addnew" element={<AddNewAdmin />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
};

export default App;
